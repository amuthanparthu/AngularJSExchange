import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  new = 'Welcome to Account component!';
  traders = ['Trader1','Trader2','Trader3','Trader4','Trader5'];
  assets = ['Bitcoin (BTC)','Litecoin (LTC)','Ethereum (ETH)','Zcash (ZEC)','Dash (DASH)','Ripple (XRP)','Monero (XMR)','BitcoinCash (BCH)','Cardano (ADA)','Maker (MKR)'];

  selectedUserTab = 1;
   tabs = [
     {
       name: 'Balance',
       key: 1,
       active: true
     },
      {
      name: 'Trader Account Settings',
      key: 2,
      active: false
    }
   ];

  confirm_transfer()
  {
    console.log('confirm transfer');
    return false;
  }

  transfer_reset()
  {
    alert('Transfer Reset!');
    return false;
  }

  modify_settings()
  {
    document.getElementById('modify_setting').style.display = 'none';
    document.getElementById('modify_button').style.display = 'block';

    document.getElementById('enable_markets').disabled = false;
    document.getElementById('disable_markets').disabled = false;

    document.getElementById('enable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid #337ab7;background-color:#337ab7;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    $('input[type=checkbox]').attr('disabled', false);

    return false;

  }

  enable_markets()
  {
    $('input[type=checkbox]').prop('checked', true);
    return false;
  }

  disable_markets()
  {
    $('input[type=checkbox]').prop('checked', false);
    return false;
  }

  save_changes()
  {
    alert("Changes has been saved!!");
    document.getElementById('modify_setting').style.display = 'block';
    document.getElementById('modify_button').style.display = 'none';

    document.getElementById('enable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('enable_markets').disabled = true;
    document.getElementById('disable_markets').disabled = true;

    $('input[type=checkbox]').attr('disabled', true);

    return false;
  }
  modify_reset()
  {
    alert("Reset values!!");
    document.getElementById('modify_setting').style.display = 'block';
    document.getElementById('modify_button').style.display = 'none';

    document.getElementById('enable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:7px;margin-top:-5px';
    document.getElementById('disable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:-1px;margin-top:-5px';

    document.getElementById('enable_markets').disabled = true;
    document.getElementById('disable_markets').disabled = true;

    $('input[type=checkbox]').attr('disabled', true);

    return false;
  }

  select_trader(event:Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText);
    document.getElementById('exchange_account').innerHTML=selectElementText;
    let from_addr= <HTMLInputElement>document.getElementById('from_addr');
    from_addr.value=selectElementText;
  }

  select_trans_asset(event:Event)
  {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText);

    if(selectElementText != '')
    {
      document.getElementById('well_height').style.cssText='height:905px;margin-top:3px;border:1px solid #337ab7;';
    }
    else
    {
      document.getElementById('well_height').style.cssText='height:875px;margin-top:3px;border:1px solid #337ab7;';
    }

    document.getElementById('balance_display').style.display = 'block';
    document.getElementById('available_bal').innerHTML = selectElementText;

  }

  constructor() { }

  ngOnInit()
  {

    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");

        document.getElementById('modify_setting').style.display = 'block';
        document.getElementById('modify_button').style.display = 'none';

        document.getElementById('enable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:7px;margin-top:-5px';
        document.getElementById('disable_markets').style.cssText = 'border:2px solid gray;background-color:gray;color:white;width:110%;margin-left:-1px;margin-top:-5px';

        document.getElementById('enable_markets').disabled = true;
        document.getElementById('disable_markets').disabled = true;
        $('input[type=checkbox]').attr('disabled', true);
    });

    $('.exchange_balance_table').on('scroll', function ()
    {
      $("#"+this.id+" > *").width($(this).width() + $(this).scrollLeft());
    });

    $('.trade_account_setting').on('scroll', function ()
    {
      $("#"+this.id+" > *").width($(this).width() + $(this).scrollLeft());
    });

    document.getElementById('exchange_account').innerHTML='Trader1';

    <HTMLInputElement>document.getElementById('enable_markets').disabled = true;
    <HTMLInputElement>document.getElementById('disable_markets').disabled = true;

    $('input[type=checkbox]').attr('disabled', true);

  }
}
