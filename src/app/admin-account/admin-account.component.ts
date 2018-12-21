import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;
import swal from 'sweetalert';


@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  traders = ['Main','Trader1','Trader2','Trader3','Trader4','Trader5'];
  assets = ['Bitcoin (BTC)','Litecoin (LTC)','Ethereum (ETH)','Zcash (ZEC)','Dash (DASH)','Ripple (XRP)','Monero (XMR)','BitcoinCash (BCH)','Cardano (ADA)','Maker (MKR)'];
  exchanges = ['BINANCE','QRYPTOS','GDAX','HUOBI','KRAKEN','OKEX','HITBTC','BITSTAMP','EXMO','YOBIT','GATEIO','LIQUI','COINEX','POLONIEX','LIVECOIN','BITFINEX','RIGHTBTC'];
  to_address = ['Trader1','Trader2','Trader3','Trader4','Trader5'];

  select_trans_asset(event:Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText);

    if(selectElementText == 'Bitcoin (BTC)')
    {
      document.getElementById('asset_balance').innerHTML = 1.2;

      let trader_change = <HTMLElement>document.getElementById('trader_change').value;
      console.log(trader_change);
      if(trader_change == 'Main')
      {
        document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
      }
      else
      {
        document.getElementById('well_height').style.cssText='height:1010px;margin-top:3px;border:1px solid #337ab7';
      }

    }
    else if(selectElementText == 'Litecoin (LTC)')
    {
      document.getElementById('asset_balance').innerHTML = 6;

      let trader_change = <HTMLElement>document.getElementById('trader_change').value;
      console.log(trader_change);
      if(trader_change == 'Main')
      {
        document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
      }
      else
      {
        document.getElementById('well_height').style.cssText='height:1010px;margin-top:3px;border:1px solid #337ab7';
      }
    }
    else if(selectElementText == 'Ethereum (ETH)')
    {
      document.getElementById('asset_balance').innerHTML = 10;

      let trader_change = <HTMLElement>document.getElementById('trader_change').value;
      console.log(trader_change);
      if(trader_change == 'Main')
      {
        document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
      }
      else
      {
        document.getElementById('well_height').style.cssText='height:1010px;margin-top:3px;border:1px solid #337ab7';
      }
    }
    else if(selectElementText == 'Zcash (ZEC)')
    {
      document.getElementById('asset_balance').innerHTML = 220;

      let trader_change = <HTMLElement>document.getElementById('trader_change').value;
      console.log(trader_change);
      if(trader_change == 'Main')
      {
        document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
      }
      else
      {
        document.getElementById('well_height').style.cssText='height:1010px;margin-top:3px;border:1px solid #337ab7';
      }
    }
    else if(selectElementText == 'Dash (DASH)')
    {
      document.getElementById('asset_balance').innerHTML = 16;

      let trader_change = <HTMLElement>document.getElementById('trader_change').value;
      console.log(trader_change);
      if(trader_change == 'Main')
      {
        document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
      }
      else
      {
        document.getElementById('well_height').style.cssText='height:1010px;margin-top:3px;border:1px solid #337ab7';
      }
    }
    else if(selectElementText == 'Ripple (XRP)')
    {
      document.getElementById('asset_balance').innerHTML = 15200;

      let trader_change = <HTMLElement>document.getElementById('trader_change').value;
      console.log(trader_change);
      if(trader_change == 'Main')
      {
        document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
      }
      else
      {
        document.getElementById('well_height').style.cssText='height:1010px;margin-top:3px;border:1px solid #337ab7';
      }
    }
    else if(selectElementText == 'Monero (XMR)')
    {
      document.getElementById('asset_balance').innerHTML =  500;
      document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
    }
    else if(selectElementText == 'BitcoinCash (BCH)')
    {
      document.getElementById('asset_balance').innerHTML =  0;

      let trader_change = <HTMLElement>document.getElementById('trader_change').value;
      console.log(trader_change);
      if(trader_change == 'Main')
      {
        document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
      }
      else
      {
        document.getElementById('well_height').style.cssText='height:1010px;margin-top:3px;border:1px solid #337ab7';
      }
    }
    else if(selectElementText == 'Cardano (ADA)')
    {
      document.getElementById('asset_balance').innerHTML =  12;

      let trader_change = <HTMLElement>document.getElementById('trader_change').value;
      console.log(trader_change);
      if(trader_change == 'Main')
      {
        document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
      }
      else
      {
        document.getElementById('well_height').style.cssText='height:1010px;margin-top:3px;border:1px solid #337ab7';
      }
    }
    else if(selectElementText == 'Maker (MKR)')
    {
      document.getElementById('asset_balance').innerHTML =  6.5;

      let trader_change = <HTMLElement>document.getElementById('trader_change').value;
      console.log(trader_change);
      if(trader_change == 'Main')
      {
        document.getElementById('well_height').style.cssText='height:805px;margin-top:3px;border:1px solid #337ab7';
      }
      else
      {
        document.getElementById('well_height').style.cssText='height:1010px;margin-top:3px;border:1px solid #337ab7';
      }
    }
    else
    {
      document.getElementById('well_height').style.cssText='height:785px;margin-top:3px;border:1px solid #337ab7';
    }

    document.getElementById('balance_display').style.display = 'block';
    document.getElementById('available_bal').innerHTML = selectElementText;

  }
  select_trader(event:Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText);

    let from_addr= <HTMLInputElement>document.getElementById('from_addr');
    from_addr.value=selectElementText;

    document.getElementById('exchange_account').innerHTML = selectElementText;

    if(selectElementText == 'Main')
    {
      document.getElementById('to_addr').style.display = 'block';
      document.getElementById('main_addr').style.display = 'none';
      document.getElementById('balance_table_main').style.display = 'block';
      document.getElementById('balance_table_trader').style.display = 'none';
      document.getElementById('exchange_wise_balance').style.display = 'none';
      document.getElementById('well_height').style.cssText='height:785px;margin-top:3px;border:1px solid #337ab7';

    }
    else
    {
      document.getElementById('to_addr').style.display = 'none';
      document.getElementById('main_addr').style.display = 'block';
      document.getElementById('balance_table_trader').style.display = 'block';
      document.getElementById('balance_table_main').style.display = 'none';
      document.getElementById('exchange_wise_balance').style.display = 'block';
      document.getElementById('well_height').style.cssText='height:995px;margin-top:3px;border:1px solid #337ab7';
    }
  }

  choose_asset_deposit(event:Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText);
  }

  collapse_hide()
  {
    $('.collapse').collapse('hide');
  }

  enable_markets()
  {
    $('.t_market').prop('checked', true);
    return false;
  }
  enable_markets_new()
  {
    $('.t_market_new').prop('checked', true);
    return false;
  }

  disable_markets()
  {
    $('.t_market').prop('checked', false);
    return false;
  }
  disable_markets_new()
  {
    $('.t_market_new').prop('checked', false);
    return false;
  }

  save_changes()
  {
    alert("Do you want to save all your changes?");
    document.getElementById('enable_markets').disabled = true;
    document.getElementById('disable_markets').disabled = true;

    document.getElementById('save_changes').disabled = true;
    document.getElementById('reset').disabled = true;

    $(".toggle_btn").prop("disabled",true);

    $('.t_market').attr('disabled', true);

    document.getElementById('enable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('save_changes').style.cssText = 'border:2px solid gray;width:30%;margin-left:345px;background-color:gray;color:white';
    document.getElementById('reset').style.cssText = 'border:2px solid gray;width:30%;background-color:gray;color:white';

  }
  modify_reset()
  {
    alert("Do you want to reset your values?");

    document.getElementById('enable_markets').disabled = true;
    document.getElementById('disable_markets').disabled = true;

    document.getElementById('save_changes').disabled = true;
    document.getElementById('reset').disabled = true;

    $(".toggle_btn").prop("disabled",true);

    $('.t_market').attr('disabled', true);

    document.getElementById('enable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('save_changes').style.cssText = 'border:2px solid gray;width:30%;margin-left:345px;background-color:gray;color:white';
    document.getElementById('reset').style.cssText = 'border:2px solid gray;width:30%;background-color:gray;color:white';
  }

  trader1_edit()
  {
    document.getElementById('enable_markets').disabled = false;
    document.getElementById('disable_markets').disabled = false;

    document.getElementById('save_changes').disabled = false;
    document.getElementById('reset').disabled = false;

    $(".toggle_btn").prop("disabled",false);

    $('.t_market').attr('disabled', false);

    document.getElementById('enable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('save_changes').style.cssText = 'border:2px solid #337ab7;width:30%;margin-left:345px;background-color:#337ab7;color:white';
    document.getElementById('reset').style.cssText = 'border:2px solid #337ab7;width:30%;background-color:#337ab7;color:white';


    document.getElementById('traders_label').innerHTML = 'Edit Trader1 Settings';
    document.getElementById('traders_label').style.cssText = 'width:16%;font-weight:bold';

  }

  trader2_edit()
  {
    document.getElementById('enable_markets').disabled = false;
    document.getElementById('disable_markets').disabled = false;

    document.getElementById('save_changes').disabled = false;
    document.getElementById('reset').disabled = false;

    $(".toggle_btn").prop("disabled",false);

    $('.t_market').attr('disabled', false);

    document.getElementById('enable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('save_changes').style.cssText = 'border:2px solid #337ab7;width:30%;margin-left:345px;background-color:#337ab7;color:white';
    document.getElementById('reset').style.cssText = 'border:2px solid #337ab7;width:30%;background-color:#337ab7;color:white';


    document.getElementById('traders_label').innerHTML = 'Edit Trader2 Settings';
    document.getElementById('traders_label').style.cssText = 'width:16%;font-weight:bold';

  }

  trader3_edit()
  {
    document.getElementById('enable_markets').disabled = false;
    document.getElementById('disable_markets').disabled = false;

    document.getElementById('save_changes').disabled = false;
    document.getElementById('reset').disabled = false;

    $(".toggle_btn").prop("disabled",false);

    $('.t_market').attr('disabled', false);

    document.getElementById('enable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('save_changes').style.cssText = 'border:2px solid #337ab7;width:30%;margin-left:345px;background-color:#337ab7;color:white';
    document.getElementById('reset').style.cssText = 'border:2px solid #337ab7;width:30%;background-color:#337ab7;color:white';


    document.getElementById('traders_label').innerHTML = 'Edit Trader3 Settings';
    document.getElementById('traders_label').style.cssText = 'width:16%;font-weight:bold';

  }

  trader4_edit()
  {
    document.getElementById('enable_markets').disabled = false;
    document.getElementById('disable_markets').disabled = false;

    document.getElementById('save_changes').disabled = false;
    document.getElementById('reset').disabled = false;

    $(".toggle_btn").prop("disabled",false);

    $('.t_market').attr('disabled', false);

    document.getElementById('enable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('save_changes').style.cssText = 'border:2px solid #337ab7;width:30%;margin-left:345px;background-color:#337ab7;color:white';
    document.getElementById('reset').style.cssText = 'border:2px solid #337ab7;width:30%;background-color:#337ab7;color:white';


    document.getElementById('traders_label').innerHTML = 'Edit Trader4 Settings';
    document.getElementById('traders_label').style.cssText = 'width:16%;font-weight:bold';

  }

  trader5_edit()
  {
    document.getElementById('enable_markets').disabled = false;
    document.getElementById('disable_markets').disabled = false;

    document.getElementById('save_changes').disabled = false;
    document.getElementById('reset').disabled = false;

    $(".toggle_btn").prop("disabled",false);

    $('.t_market').attr('disabled', false);

    document.getElementById('enable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('save_changes').style.cssText = 'border:2px solid #337ab7;width:30%;margin-left:345px;background-color:#337ab7;color:white';
    document.getElementById('reset').style.cssText = 'border:2px solid #337ab7;width:30%;background-color:#337ab7;color:white';


    document.getElementById('traders_label').innerHTML = 'Edit Trader5 Settings';
    document.getElementById('traders_label').style.cssText = 'width:16%;font-weight:bold';

  }

  trader6_edit()
  {
    document.getElementById('enable_markets').disabled = false;
    document.getElementById('disable_markets').disabled = false;

    document.getElementById('save_changes').disabled = false;
    document.getElementById('reset').disabled = false;

    $(".toggle_btn").prop("disabled",false);

    $('.t_market').attr('disabled', false);

    document.getElementById('enable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('save_changes').style.cssText = 'border:2px solid #337ab7;width:30%;margin-left:345px;background-color:#337ab7;color:white';
    document.getElementById('reset').style.cssText = 'border:2px solid #337ab7;width:30%;background-color:#337ab7;color:white';


    document.getElementById('traders_label').innerHTML = 'Edit Trader6 Settings';
    document.getElementById('traders_label').style.cssText = 'width:16%;font-weight:bold';

  }

  delete_trader()
  {
    swal("Success!", "Trader1 has been successfully deleted!", "success");
  }
  delete_trader1()
  {
    swal("Success!", "Trader2 has been successfully deleted!", "success");
  }
  delete_trader2()
  {
    swal("Success!", "Trader3 has been successfully deleted!", "success");
  }
  delete_trader3()
  {
    swal("Success!", "Trader4 has been successfully deleted!", "success");
  }
  delete_trader4()
  {
    swal("Success!", "Trader5 has been successfully deleted!", "success");
  }
  delete_trader5()
  {
    swal("Success!", "Trader6 has been successfully deleted!", "success");
  }

  create_trader()
  {
    swal({
        title : "Success!",
        text : "Trader has been successfully created!",
        icon : "success"
        }).then(function()
        {
          $('#new_trader').modal('hide');
        });

  }

  show_pwd()
  {
    var x = document.getElementById("trader_pwd");
    if (x.type === "password")
    {
        x.type = "text";
    }
    else
    {
        x.type = "password";
    }
  }

  change_deposit()
  {
    $("#deposit").siblings('a.active').removeClass("active");
    $("#deposit_main").addClass("active");
    $("#balance_main").removeClass("active");
    var index = $("#deposit").index();
    $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
    $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
  }

  change_withdraw()
  {
    $("#withdraw").siblings('a.active').removeClass("active");
    $("#withdraw_main").addClass("active");
    $("#balance_main").removeClass("active");
    var index = $("#withdraw").index();
    $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
    $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
  }


  constructor() { }

  ngOnInit() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");

    });

    $('[data-toggle="tooltip"]').tooltip();

    $('.exchange_wise_balance').on('scroll', function ()
    {
      $("#"+this.id+" > *").width($(this).width() + $(this).scrollLeft());
    });

    $('.trade_account_setting').on('scroll', function ()
    {
      $("#"+this.id+" > *").width($(this).width() + $(this).scrollLeft());
    });

    $('.tradeable_market_centers').on('scroll', function ()
    {
      $("#"+this.id+" > *").width($(this).width() + $(this).scrollLeft());
    });

    $('.tradeable_market_centers_new').on('scroll', function ()
    {
      $("#"+this.id+" > *").width($(this).width() + $(this).scrollLeft());
    });

    $('.asset_allocation_new').on('scroll', function ()
    {
      $("#"+this.id+" > *").width($(this).width() + $(this).scrollLeft());
    });

    document.getElementById('enable_markets').disabled = true;
    document.getElementById('disable_markets').disabled = true;

    document.getElementById('save_changes').disabled = true;
    document.getElementById('reset').disabled = true;

    $(".toggle_btn").prop("disabled",true);

    $('.t_market').attr('disabled', true);


  }

}
