//
//  ForwardDateRefiner.swift
//  SwiftyChrono
//
//  Created by Jerry Chen on 1/24/17.
//  Copyright © 2017 Potix. All rights reserved.
//

import Foundation

class ForwardDateRefiner: Refiner {
    override public func refine(text: String, results: [ParsedResult], opt: [OptionType: Int]) -> [ParsedResult] {
        if !opt.keys.contains(.forwardDate) && !opt.keys.contains(.forwardDatesOnly) {
            return results
        }
        
        let resultsLength = results.count
        
        var i = 1
        while i < resultsLength {
            var result = results[i]
            let refMoment = result.ref
            
            if result.start.isCertain(component: .day) && result.start.isCertain(component: .month) &&
                !result.start.isCertain(component: .year) && refMoment.isAfter(result.start.moment) {
                // Adjust year into the future
                for _ in 0..<3 {
                    if !refMoment.isAfter(result.start.moment) {
                        break
                    }
                    
                    result.start.imply(.year, to: result.start[.year])
                    if result.end != nil && !result.end!.isCertain(component: .year) {
                        result.end!.imply(.year, to: result.end![.year]! + 1)
                    }
                }
                
                result.tags[.forwardDateRefiner] = true
            }
            
            if !result.start.isCertain(component: .day) && !result.start.isCertain(component: .month) &&
                !result.start.isCertain(component: .year) && result.start.isCertain(component: .weekday) &&
                refMoment.isAfter(result.start.moment)
            {
                // Adjust date to the coming week
                let weekday = result.start[.weekday]!
                let day = refMoment.day > weekday ? weekday + 7 : weekday
                
                let newRefMoment = Date(refMoment, byComponentUpdates: [(.day, day)])
                
                result.start.imply(.day, to: newRefMoment.day)
                result.start.imply(.month, to: newRefMoment.month)
                result.start.imply(.year, to: newRefMoment.year)
                result.tags[.forwardDateRefiner] = true
            }
            
            i += 1
        }
        
        return results
    }
}