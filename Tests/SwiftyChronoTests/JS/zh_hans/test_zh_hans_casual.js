
test("Test - Single Expression", function() {
		 
		 
		 var text = "鸡而家全部都是鸡";
		 var results = chrono.casual.parse(text, new Date(2012, 7, 10, 8, 9, 10, 11));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index');
		 ok(result.text == '而家', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 ok(result.start.get('hour') == 8, 'Test Result - (Hour) ' + JSON.stringify(result.start) );
		 ok(result.start.get('minute') == 9, 'Test Result - (Minute) ' + JSON.stringify(result.start) );
		 ok(result.start.get('second') == 10, 'Test Result - (Second) ' + JSON.stringify(result.start) );
		 ok(result.start.get('millisecond') == 11, 'Test Result - (Millisecond) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 8, 9, 10, 11);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "鸡今日全部都是鸡";
		 var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index');
		 ok(result.text == '今日', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 // Say.."Tomorrow" in the late night (1 AM)
		 var text = "鸡明天全部都是鸡";
		 var results = chrono.casual.parse(text, new Date(2012, 7, 10, 1));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "鸡琴日全部都是鸡";
		 var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index');
		 ok(result.text == '琴日', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 9, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "鸡昨天晚上全部都是鸡";
		 var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index');
		 ok(result.text == '昨天晚上', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 ok(result.start.get('hour') == 18, 'Test Result - (hour) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 9, 18);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 var text = "鸡今日朝早全部都是鸡";
		 var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index');
		 ok(result.text == '今日朝早', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 ok(result.start.get('hour') == 6, 'Test Result - (hour) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 6);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 var text = "鸡今晚全部都是鸡";
		 var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index');
		 ok(result.text == '今晚', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 ok(result.start.get('hour') == 18, 'Test Result - (hour) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 18);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 });


test("Test - Casual date range", function() {
		 
		 var text = "鸡今日 - 下礼拜五全部都是鸡";
		 var results = chrono.casual.parse(text, new Date(2012, 7, 4, 12));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index');
		 ok(result.text == '今日 - 下礼拜五', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 4, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 ok(result.start.get('hour') == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 4, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 
		 
		 ok(result.end, JSON.stringify(result.start) );
		 ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.end.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 ok(result.end.get('hour') == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.end.date();
		 var expectDate = new Date(2012, 7, 10, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 
		 
		 
		 var text = "鸡今日 - 下礼拜五全部都是鸡";
		 var results = chrono.casual.parse(text, new Date(2012, 7, 10, 12));
		 ok(results.length == 1, JSON.stringify( results ) );
		 
		 var result = results[0];
		 if(result){
		 ok(result.index == 1, 'Wrong index');
		 ok(result.text == '今日 - 下礼拜五', result.text );
		 
		 ok(result.start, JSON.stringify(result.start) );
		 ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 ok(result.start.get('hour') == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.start.date();
		 var expectDate = new Date(2012, 7, 10, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 
		 
		 ok(result.end, JSON.stringify(result.start) );
		 ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) );
		 ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) );
		 ok(result.end.get('day') == 17, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 ok(result.end.get('hour') == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) );
		 
		 var resultDate = result.end.date();
		 var expectDate = new Date(2012, 7, 17, 12);
		 ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		 }
		 });





test('Test - Random text', function() {
		 
		 var text = "今日夜晚";
		 var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
		 ok(result.text == text, result.text);
		 ok(result.start.get('year') == 2012, JSON.stringify(result.start));
		 ok(result.start.get('month') == 1, JSON.stringify(result.start));
		 ok(result.start.get('day') == 1, JSON.stringify(result.start));
		 ok(result.start.get('hour') == 18, JSON.stringify(result.start));
		 ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start));
		 
		 var text = "今晚8点正";
		 var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
		 ok(result.text == text, result.text);
		 ok(result.start.get('hour')  == 20, JSON.stringify(result.start));
		 ok(result.start.get('year')  == 2012, JSON.stringify(result.start));
		 ok(result.start.get('month') == 1, JSON.stringify(result.start));
		 ok(result.start.get('day')   == 1, JSON.stringify(result.start));
		 ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start));
		 
		 
		 var text = "晚上8点";
		 var result = chrono.parse(text, new Date(2012, 1-1, 1, 12))[0];
		 ok(result.text == text, result.text);
		 ok(result.start.get('hour')  == 20, JSON.stringify(result.start));
		 ok(result.start.get('year')  == 2012, JSON.stringify(result.start));
		 ok(result.start.get('month') == 1, JSON.stringify(result.start));
		 ok(result.start.get('day')   == 1, JSON.stringify(result.start));
		 ok(result.start.get('meridiem')  == 1, JSON.stringify(result.start));
		 
		 
		 var text = "星期四";
		 var result = chrono.parse(text)[0];
		 ok(result.text == text, result.text);
		 ok(result.start.get('weekday') == 4, result.text);
		 });
