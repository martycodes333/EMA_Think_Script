# SIX EMA x NINE EMA crossovers

input longEntries = yes;
input shortEntries = no;

input fastMALength = 6;
input slowMALength = 9;
input averageTypeFast = AverageType.Exponential;
input averageTypeSlow = AverageType.Exponential;


input quantity = 1000;

plot fastMA = MovingAverage (averageTypeFast, close, fastMALength);
plot slowMA = MovingAverage (averageTypeSlow, close, slowMALength);


#6 EMA x 9 EMA 
# AddLabel



AddOrder(OrderType.Buy_To_Open, (longEntries) and fastMA crosses above slowMA, close, quantity);
AddOrder(OrderType.Sell_To_Close, fastMA crosses below slowMA, close, quantity); 

#AddOrder(OrderType.Sell_To_Open, (shortEntries) and fastMA crosses below slowMA, close, quantity);
#AddOrder(OrderType.Buy_To_Close, fastMA crosses above slowMA, close, quantity); 

#AddOrder(OrderType.BUY_AUTO, no) ;
