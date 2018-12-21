import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  constructor() { }

  ngOnInit(){
     var availableTags = [
      "BTC/USD - Bitcoin","BTC/USDT - Bitcoin","BTC/EUR - Bitcoin","BTC/KRW - Bitcoin","BTC/JPY - Bitcoin","LTC/USD - Litecoin","LTC/USDT - Litecoin","LTC/BTC - Litecoin",
      "LTC/EUR - Litecoin","LTC/KRW - Litecoin","LTC/JPY - Litecoin","ETH/USD - Ethereum","ETH/USDT - Ethereum","ETH/EUR - Ethereum","ETH/KRW - Ethereum","ETH/JPY - Ethereum",
      "ZEC/USD - Zcash","ZEC/USDT - Zcash","ZEC/EUR - Zcash","ZEC/BTC - Zcash","ZEC/KRW - Zcash","ZEC/JPY - Zcash","DASH/USD - Dash","DASH/USDT - Dash","DASH/EUR - Dash",
      "DASH/BTC - Dash","DASH/KRW - Dash","DASH/JPY - Dash","XRP/USD - Ripple","XRP/USDT - Ripple","XRP/EUR - Ripple","XRP/BTC - Ripple","XRP/KRW - Ripple","XRP/JPY - Ripple",
      "XMR/USD - Monero","XMR/USDT - Monero","XMR/EUR - Monero","XMR/BTC - Monero","XMR/KRW - Monero","XMR/JPY - Monero","BCH/USD - BitcoinCash","BCH/USDT - BitcoinCash",
      "BCH/EUR - BitcoinCash","BCH/BTC - BitcoinCash","BCH/KRW - BitcoinCash","BCH/JPY - BitcoinCash","ADA/USD - Cardano","ADA/USDT - Cardano","ADA/EUR - Cardano","ADA/BTC - Cardano",
      "ADA/KRW - Cardano","ADA/JPY - Cardano","MKR/USD - Maker","MKR/USDT - Maker","MKR/EUR - Maker","MKR/BTC - Maker","MKR/KRW - Maker","MKR/JPY - Maker","ADA/USD - Cardano",
      "ADA/USDT - Cardano","ADA/EUR - Cardano","ADA/BTC - Cardano","ADA/KRW - Cardano","ADA/JPY - Cardano",

    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  }

  title = 'Omnipoint';
  assets = ['Bitcoin (BTC)','Litecoin (LTC)','Ethereum (ETH)','Zcash (ZEC)','Dash (DASH)','Ripple (XRP)','Monero (XMR)','BitcoinCash (BCH)','Cardano (ADA)','Maker (MKR)'];
  types = ['Market','Limit'];
  exchanges = ['BEST','BINANCE','QRYPTOS','GDAX','HUOBI','KRAKEN','OKEX','HITBTC','BITSTAMP','EXMO','YOBIT','GATEIO','LIQUI','COINEX','POLONIEX','LIVECOIN','BITFINEX','RIGHTBTC'];
  markets = ['UNIVERSAL','BINANCE','QRYPTOS','GDAX','HUOBI','KRAKEN','OKEX','HITBTC','BITSTAMP','EXMO','YOBIT','GATEIO','LIQUI','COINEX','POLONIEX','LIVECOIN','BITFINEX','RIGHTBTC'];
  expiry = ['Day','Immediate or Cancel','Fill or Kill'];
  quote_currency = ['BTC','USD','EUR','KRW','JPY'];


  placeOrder()
  {
    alert("Place Order Button!");
  }
  reset()
  {
    alert("Reset Button!")
  }
  suspend_order()
  {
    alert("Suspend order!")
  }
  cancel_order()
  {
    alert("Cancel order!")
  }
  fill_details()
  {
    alert("Fill Details!")
  }

  Select_buy_asset(event: Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
  }

  Buy_test(event:Event)
  {
     let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
  }

  Buy_destination(event:Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText);
    if(selectElementText == 'BEST')
    {
      document.getElementById('exchange_text').style.display = 'block';
      document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
      document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';
    }
    else
    {
      document.getElementById('exchange_text').style.display = 'none';
      document.getElementById('graph').style.cssText = 'width:103%;height:637px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
      document.getElementById('news_feed_size').style.cssText = 'margin-top:-52px;height:281px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';


    }
  }

  Sell_destination(event:Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText);
    if(selectElementText == 'BEST')
    {
      document.getElementById('sell_exchange_text').style.display = 'block';
      document.getElementById('graph').style.cssText = 'width:102%;height:666px;border:2px solid #337ab7;border-radius:4px';
      document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';
    }
    else
    {
      document.getElementById('sell_exchange_text').style.display = 'none';
      document.getElementById('graph').style.cssText = 'width:102%;height:637px;border:2px solid #337ab7;border-radius:4px';
      document.getElementById('news_feed_size').style.cssText = 'margin-top:-52px;height:281px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';
    }
  }

  uni_currency(event:Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText);
    /*document.getElementById('uni_cur').innerHTML='('+selectElementText+')';*/
  }
  market_change(event:Event)
  {
      let selectedOptions = event.target['options'];
      let selectedIndex = selectedOptions.selectedIndex;
      let selectElementText = selectedOptions[selectedIndex].text;
      console.log(selectElementText);

      if(selectElementText == 'UNIVERSAL')
      {
        document.getElementById('market_type').innerHTML='Universal Bid / Ask (BTC)';
        document.getElementById('balance_text').style.display="none";
        document.getElementById('balance_text_sell').style.display="none";

        var exchange_column = <HTMLElement>document.getElementsByClassName('exchange_col');
        for (var i = 0; i < exchange_column.length; i ++)
        {
            exchange_column[i].style.cssText = 'display:block;margin-bottom:-2px';
        }
      }
      else
      {
        document.getElementById('market_type').innerHTML='Bid / Ask'+' ('+selectElementText+' - BTC'+')';
        document.getElementById('exchange_balance').innerHTML=selectElementText;
        document.getElementById('exchange_balance_sell').innerHTML=selectElementText;
        document.getElementById('balance_text').style.display="block";
        document.getElementById('balance_text_sell').style.display="block";

        var exchange_column = <HTMLElement>document.getElementsByClassName('exchange_col');
        for (var i = 0; i < exchange_column.length; i ++)
        {
            exchange_column[i].style.display = 'none';
        }

        var uni_col = <HTMLElement>document.getElementsByClassName('uni_col');
        for (var i = 0; i < uni_col.length; i ++)
        {
          uni_col[i].style.width = '27%';
        }
      }
  }

  /*asset_change(event:Event)
  {
      let selectedOptions = event.target['options'];
      let selectedIndex = selectedOptions.selectedIndex;
      let selectElementText = selectedOptions[selectedIndex].text.split(' ')[1].replace('(','').replace(')','');
      console.log(selectElementText);


      let market_value = <HTMLElement>document.getElementById('market_change').value;

      if(selectElementText == 'BTC' && market_value == 'UNIVERSAL')
      {
        console.log('btc');
        document.getElementById('market_type').innerHTML='Universal Bid / Ask (BTC)';
      }
      else if(selectElementText != 'BTC' && market_value == 'UNIVERSAL')
      {
        document.getElementById('market_type').innerHTML='Universal Bid / Ask ('+selectElementText+')';
      }
      else if(selectElementText == 'BTC' && market_value != 'UNIVERSAL')
      {
        document.getElementById('market_type').innerHTML='Bid / Ask'+' ('+market_value+' - BTC'+')';
      }
      else
      {
        document.getElementById('market_type').innerHTML='Bid / Ask'+' ('+market_value+' - '+selectElementText+')';
      }

  }*/

  Buy_Type(event:Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
  }

  select_all()
  {
    if(document.getElementById('sel_all').checked)
    {
      $('.open_select').prop('checked', true);
    }
    else
    {
      $('.open_select').prop('checked', false);
    }
  }

  select_all_complete()
  {
    if(document.getElementById('sel_all_com').checked)
    {
      $('.com_select').prop('checked', true);
    }
    else
    {
      $('.com_select').prop('checked', false);
    }
  }


  bid_row_1()
  {
    document.getElementById('bid_row_1').style.backgroundColor = 'lightgray';
    document.getElementById('bid_row_2').style.backgroundColor = '';
    document.getElementById('bid_row_3').style.backgroundColor = '';
    document.getElementById('bid_row_4').style.backgroundColor = '';
    document.getElementById('bid_row_5').style.backgroundColor = '';
    document.getElementById('bid_row_6').style.backgroundColor = '';

    let element = document.getElementById('sell_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('sell_price');
    price.value='6465.4';

    let qty= <HTMLInputElement>document.getElementById('sell_quantity');
    qty.value='100';

    document.getElementById('sell_exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';


    let orderType= <HTMLInputElement>document.getElementById('sell_orderType');
    orderType.value='Limit';
  }

  bid_row_2()
  {

    document.getElementById('bid_row_1').style.backgroundColor = '';
    document.getElementById('bid_row_2').style.backgroundColor = 'lightgray';
    document.getElementById('bid_row_3').style.backgroundColor = '';
    document.getElementById('bid_row_4').style.backgroundColor = '';
    document.getElementById('bid_row_5').style.backgroundColor = '';
    document.getElementById('bid_row_6').style.backgroundColor = '';

    let element = document.getElementById('sell_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('sell_price');
    price.value='6464.3';

    let qty= <HTMLInputElement>document.getElementById('sell_quantity');
    qty.value='230';

    document.getElementById('sell_exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('sell_orderType');
    orderType.value='Limit';
  }

  bid_row_3()
  {

    document.getElementById('bid_row_1').style.backgroundColor = '';
    document.getElementById('bid_row_2').style.backgroundColor = '';
    document.getElementById('bid_row_3').style.backgroundColor = 'lightgray';
    document.getElementById('bid_row_4').style.backgroundColor = '';
    document.getElementById('bid_row_5').style.backgroundColor = '';
    document.getElementById('bid_row_6').style.backgroundColor = '';

    let element = document.getElementById('sell_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('sell_price');
    price.value='6462.5';

    let qty= <HTMLInputElement>document.getElementById('sell_quantity');
    qty.value='340';

    document.getElementById('sell_exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('sell_orderType');
    orderType.value='Limit';
  }

  bid_row_4()
  {

    document.getElementById('bid_row_1').style.backgroundColor = '';
    document.getElementById('bid_row_2').style.backgroundColor = '';
    document.getElementById('bid_row_3').style.backgroundColor = '';
    document.getElementById('bid_row_4').style.backgroundColor = 'lightgray';
    document.getElementById('bid_row_5').style.backgroundColor = '';
    document.getElementById('bid_row_6').style.backgroundColor = '';

    let element = document.getElementById('sell_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('sell_price');
    price.value='6461.33';

    let qty= <HTMLInputElement>document.getElementById('sell_quantity');
    qty.value='500';

    document.getElementById('sell_exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('sell_orderType');
    orderType.value='Limit';
  }
  bid_row_5()
  {

    document.getElementById('bid_row_1').style.backgroundColor = '';
    document.getElementById('bid_row_2').style.backgroundColor = '';
    document.getElementById('bid_row_3').style.backgroundColor = '';
    document.getElementById('bid_row_4').style.backgroundColor = '';
    document.getElementById('bid_row_5').style.backgroundColor = 'lightgray';
    document.getElementById('bid_row_6').style.backgroundColor = '';

    let element = document.getElementById('sell_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('sell_price');
    price.value='6460.25';

    let qty= <HTMLInputElement>document.getElementById('sell_quantity');
    qty.value='250';

    document.getElementById('sell_exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('sell_orderType');
    orderType.value='Limit';
  }
  bid_row_6()
  {
    document.getElementById('bid_row_1').style.backgroundColor = '';
    document.getElementById('bid_row_2').style.backgroundColor = '';
    document.getElementById('bid_row_3').style.backgroundColor = '';
    document.getElementById('bid_row_4').style.backgroundColor = '';
    document.getElementById('bid_row_5').style.backgroundColor = '';
    document.getElementById('bid_row_6').style.backgroundColor = 'lightgray';

    let element = document.getElementById('sell_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('sell_price');
    price.value='6459.33';

    let qty= <HTMLInputElement>document.getElementById('sell_quantity');
    qty.value='425';

    document.getElementById('sell_exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('sell_orderType');
    orderType.value='Limit';
  }



  ask_row_1()
  {
    document.getElementById('ask_row_1').style.backgroundColor = 'lightgray';
    document.getElementById('ask_row_2').style.backgroundColor = '';
    document.getElementById('ask_row_3').style.backgroundColor = '';
    document.getElementById('ask_row_4').style.backgroundColor = '';
    document.getElementById('ask_row_5').style.backgroundColor = '';
    document.getElementById('ask_row_6').style.backgroundColor = '';

    let element = document.getElementById('buy_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('buy_price');
    price.value='6471.6';

    let qty= <HTMLInputElement>document.getElementById('buy_quantity');
    qty.value='435';

    document.getElementById('exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('buy_orderType');
    orderType.value='Limit';
  }
  ask_row_2()
  {
    document.getElementById('ask_row_1').style.backgroundColor = '';
    document.getElementById('ask_row_2').style.backgroundColor = 'lightgray';
    document.getElementById('ask_row_3').style.backgroundColor = '';
    document.getElementById('ask_row_4').style.backgroundColor = '';
    document.getElementById('ask_row_5').style.backgroundColor = '';
    document.getElementById('ask_row_6').style.backgroundColor = '';

    let element = document.getElementById('buy_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('buy_price');
    price.value='6469.3';

    let qty= <HTMLInputElement>document.getElementById('buy_quantity');
    qty.value='350';

    document.getElementById('exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('buy_orderType');
    orderType.value='Limit';
  }
  ask_row_3()
  {
    document.getElementById('ask_row_1').style.backgroundColor = '';
    document.getElementById('ask_row_2').style.backgroundColor = '';
    document.getElementById('ask_row_3').style.backgroundColor = 'lightgray';
    document.getElementById('ask_row_4').style.backgroundColor = '';
    document.getElementById('ask_row_5').style.backgroundColor = '';
    document.getElementById('ask_row_6').style.backgroundColor = '';

    let element = document.getElementById('buy_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('buy_price');
    price.value='6468.74';

    let qty= <HTMLInputElement>document.getElementById('buy_quantity');
    qty.value='142';

    document.getElementById('exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('buy_orderType');
    orderType.value='Limit';
  }

  ask_row_4()
  {
    document.getElementById('ask_row_1').style.backgroundColor = '';
    document.getElementById('ask_row_2').style.backgroundColor = '';
    document.getElementById('ask_row_3').style.backgroundColor = '';
    document.getElementById('ask_row_4').style.backgroundColor = 'lightgray';
    document.getElementById('ask_row_5').style.backgroundColor = '';
    document.getElementById('ask_row_6').style.backgroundColor = '';

    let element = document.getElementById('buy_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('buy_price');
    price.value='6468.1';

    let qty= <HTMLInputElement>document.getElementById('buy_quantity');
    qty.value='540';

    document.getElementById('exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('buy_orderType');
    orderType.value='Limit';
  }

  ask_row_5()
  {
    document.getElementById('ask_row_1').style.backgroundColor = '';
    document.getElementById('ask_row_2').style.backgroundColor = '';
    document.getElementById('ask_row_3').style.backgroundColor = '';
    document.getElementById('ask_row_4').style.backgroundColor = '';
    document.getElementById('ask_row_5').style.backgroundColor = 'lightgray';
    document.getElementById('ask_row_6').style.backgroundColor = '';

    let element = document.getElementById('buy_option');
    element.click();

    let price= <HTMLInputElement>document.getElementById('buy_price');
    price.value='6467.6';

    let qty= <HTMLInputElement>document.getElementById('buy_quantity');
    qty.value='50';

    document.getElementById('exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('buy_orderType');
    orderType.value='Limit';
  }

   ask_row_6()
  {
    document.getElementById('ask_row_1').style.backgroundColor = '';
    document.getElementById('ask_row_2').style.backgroundColor = '';
    document.getElementById('ask_row_3').style.backgroundColor = '';
    document.getElementById('ask_row_4').style.backgroundColor = '';
    document.getElementById('ask_row_5').style.backgroundColor = '';
    document.getElementById('ask_row_6').style.backgroundColor = 'lightgray';

    let element = document.getElementById('buy_option');
    element.click();


    let price= <HTMLInputElement>document.getElementById('buy_price');
    price.value='6466.5';

    let qty= <HTMLInputElement>document.getElementById('buy_quantity');
    qty.value='120';

    document.getElementById('exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-80px;height:309px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';

    let orderType= <HTMLInputElement>document.getElementById('buy_orderType');
    orderType.value='Limit';
  }

  buy()
  {
    document.getElementById('sell_option').style.cssText='color:brown;background-color:none';
    document.getElementById('buy_option').style.cssText='color:white;background-color:#555';
    let exchange= <HTMLInputElement>document.getElementById('sell_exchange');
    exchange.value='BEST';
    document.getElementById('exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
  }
  sell()
  {
    document.getElementById('buy_option').style.cssText='color:green;background-color:none';
    document.getElementById('sell_option').style.cssText='color:white;background-color:#555';
    let exchange= <HTMLInputElement>document.getElementById('buy_exchange');
    exchange.value='BEST';
    document.getElementById('sell_exchange_text').style.display = 'block';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
  }

  buy_option()
  {
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-83px;height:310px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    let exchange= <HTMLInputElement>document.getElementById('sell_exchange');
    exchange.value='BEST';
    document.getElementById('exchange_text').style.display = 'block';
  }

  sell_option()
  {
    document.getElementById('news_feed_size').style.cssText = 'margin-top:-83px;height:310px;border:2px solid #337ab7;border-radius:4px;margin-left:-8px;width:437px';
    document.getElementById('graph').style.cssText = 'width:103%;height:666px;border:2px solid #337ab7;border-radius:4px;margin-left:-6px';
    let exchange= <HTMLInputElement>document.getElementById('buy_exchange');
    exchange.value='BEST';
    document.getElementById('sell_exchange_text').style.display = 'block';
  }

  myFunction()
  {
      document.getElementById("myDropdown").classList.toggle("show");
  }

  onKey(event)
  {
    let inputValue = event.target.value.toUpperCase();
    console.log(inputValue);

    if(inputValue == 'BTC' || inputValue == 'BITCOIN')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='Bitcoin (BTC)';
    }
    else if(inputValue == 'LTC' || inputValue == 'Litecoin')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='Litecoin (LTC)';
    }
    else if(inputValue == 'ETH' || inputValue == 'ETHEREUM')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='Ethereum (ETH)';
    }
    else if(inputValue == 'ZEC' || inputValue == 'ZCASH')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='Zcash (ZEC)';
    }
    else if(inputValue == 'DASH' || inputValue == 'DASH')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='Dash (DASH)';
    }
    else if(inputValue == 'XRP' || inputValue == 'RIPPLE')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='Ripple (XRP)';
    }
    else if(inputValue == 'XMR' || inputValue == 'MONERO')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='Monero (XMR)';
    }
    else if(inputValue == 'BCH' || inputValue == 'BITCOINCASH')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='BitcoinCash (BCH)';
    }
    else if(inputValue == 'ADA' || inputValue == 'CARDANO')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='Cardano (ADA)';
    }
    else if(inputValue == 'MKR' || inputValue == 'MAKER')
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='Maker (MKR)';
    }
    else
    {
      let orderType= <HTMLInputElement>document.getElementById('asset_change');
      orderType.value='';
    }
  }

}
