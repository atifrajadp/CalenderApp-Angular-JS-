import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import * as $ from 'jquery';
import { AppComponent } from '../app.component';




@Component({
  selector: 'calender',
  templateUrl: './calender-data.component.html',
  styleUrls: ['./calender-data.component.css']
})
export class CalenderDataComponent implements OnInit {
 // @Input() raja:string;



  ngOnInit(): void {






    

    var geomonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var hijrimonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let myap : AppComponent= new AppComponent();
    let b=myap.b;
    let ii= myap.i;

      var a = new Date();
      var month:any = a.getMonth()+1;
      var yer = a.getFullYear()
      var day:any = a.getUTCDate();

     var isl:any= new Intl.DateTimeFormat('ar-PK-u-ca-islamic', {day: 'numeric'}).format(Date.now())
     var islmonth:any= new Intl.DateTimeFormat('ar-PK-u-ca-islamic', {month: 'long'}).format(Date.now())
     var islyear:any= new Intl.DateTimeFormat('ar-PK-u-ca-islamic', {year: 'numeric'}).format(Date.now())
  console.log(isl);
  var isldd:any=isl-2;
  if(isl==1)
  {
   isldd=29
  }
  else if(isl ==2)
  {
    isldd=30
  }
  

  let makeblue =(dte:HTMLTableElement)=>{

    if(day==dte)
    {
         return dte.style.color="blue";

    }
      
    }


  var st =isldd;
  console.log(isldd);
  console.log(islmonth)
  console.log(islyear)
  
    
      b[0].addEventListener('click',function(e){e.preventDefault();getdata(ii.val(),month,a.getFullYear());gethijri(ii.val(),islmonth,islyear)});     

$('#prev').on('click',function(){

  if(month!=1)
        { 
        getdata(ii.val(),month--,a.getFullYear())
              
        }
        else if(month == 1)
        {
         getdata(ii.val(),month,a.getFullYear())
         month=12;
         
        }
})

      $('#next').on('click',function(){                
        if(month!=13)
        {        
        getdata(ii.val(),month,a.getFullYear())
        console.log(month++)
        }
        else if(month == 13 )
        {
          getdata(ii.val(),month-1,a.getFullYear())
         month=1;
         console.log(month)
        }
        
       })
       

    $('#hijr').on('click',(e)=>{ 
     // e.preventDefault();
      if(document.getElementById('h').style.display=='none')
      { 
          document.getElementById('ge').style.display='none'
      document.getElementById('h').style.display='block'
      document.getElementById('isl').classList.add("blue");

    }
    else
    {
      document.getElementById('ge').style.display='none'
    }
           
    })

    $('#geo').on('click',(e)=>{

     // e.preventDefault();

      if(document.getElementById('ge').style.display=='none')
      {
        document.getElementById('h').style.display='none'
        document.getElementById('ge').style.display='block'
      }
      else
      {
        document.getElementById('h').style.display='none'
      }

      
    })
       
    
    let getdata=(city:any,moth,year)=>{

      

      $('.mon').find('tr').empty();
      $('.tue').find('tr').empty();
      $('.wed').find('tr').empty();
      $('.thurs').find('tr').empty();
      $('.fri').find('tr').empty();
      $('.sat').find('tr').empty();
      $('.sun').find('tr').empty();
      $('.ath').find('tr').empty();
      $('.thal').find('tr').empty();
      $('.arba').find('tr').empty();
      $('.khamees').find('tr').empty();
      $('.juma').find('tr').empty();
      $('.sabt').find('tr').empty();
      $('.ahad').find('tr').empty();
     
      $('.fajr').find('tr').empty();
      $('.sunr').find('tr').empty();
      $('.dhuhr').find('tr').empty();
      $('.asr').find('tr').empty();
      $('.suns').find('tr').empty();
      $('.maghrib').find('tr').empty();
      $('.isha').find('tr').empty();
      $('.midn').find('tr').empty();
      $('.imsak').find('tr').empty();
      //$('#en').empty();
      $('#ar').empty();


    $.getJSON('http://api.aladhan.com/v1/calendarByCity?city='+city+'&country=pakistan&month='+moth+'&year='+year,function(json)
         {
        var toshow = json.data;
        var det = a.getMonth();
      

        // console.log(day);
       
          if(Object.keys(json.data).length <=31)
          console.log(st)

          
          console.log(json.data[29].date.hijri.day)
        for(let i=0;i<=Object.keys(json.data).length-1;i++)
               {

                switch(json.data[i].date.hijri.day)
                {
                  case "1":
                    {
                     $('.fajr').append('<tr><td>'+json.data[i].timings.Fajr+'</td></tr>');
                     $('.sunr').append('<tr><td>'+json.data[i].timings.Sunrise+'</td></tr>');
                     $('.dhuhr').append('<tr><td>'+json.data[i].timings.Dhuhr+'</td></tr>');
                     $('.asr').append('<tr><td>'+json.data[i].timings.Asr+'</td></tr>');
                     $('.suns').append('<tr><td>'+json.data[i].timings.Sunset+'</td></tr>');
                     $('.maghrib').append('<tr><td>'+json.data[i].timings.Maghrib+'</td></tr>');
                     $('.isha').append('<tr><td>'+json.data[i].timings.Isha+'</td></tr>');
                     $('.midn').append('<tr><td>'+json.data[i].timings.Midnight+'</td></tr>');
                     $('.imsak').append('<tr><td>'+json.data[i].timings.Imsak+'</td></tr>');
                     break;
                    }
                
               }

                if(json.data[i].date.gregorian.day==day )
                {
                  let curr = json.data[i].date.gregorian.day;
                  console.log(curr)
                  let currd=json.data[i].date.gregorian.month.en
                  console.log(currd)

                  $('#val').append(curr+''+currd+''+a.getFullYear())
                 var r:any= $('#ge thead tr').closest('td')
                 console.log(r)
                   if(r.find('tr:eq('+i+')')==currd)
                   {
                    r.find('tr:eq('+i+')').css('color','green');
                    break;
                     
                   }

               
                  
                }
              
                // console.log(Object.keys(json.data).length-1)
               switch(json.data[i].date.gregorian.weekday.en)
               {

                 case "Monday":
                   {                                   
                     $('.mon').append('<tr><td>'+json.data[i].date.gregorian.day+'</td></tr>')
                     makeblue(json.data[i].date.gregorian.day)
                    break;
                  
                    
                }
                case "Tuesday":
                   {

                   $('.tue').append('<tr><td>'+json.data[i].date.gregorian.day+'</td></tr>');
                   break;
                }
                case "Wednesday":
                   {

                 $('.wed').append('<tr><td>'+json.data[i].date.gregorian.day+'</td></tr>');
                   break;
                }

                case "Thursday":
                   {

                    $('.thurs').append('<tr><td>'+json.data[i].date.gregorian.day+'</td></tr>');
                    break;
                }

                case "Friday":
                   {

                    $('.fri').append('<tr><td>'+json.data[i].date.gregorian.day+'</td></tr>');
                    break;
                }

                case "Saturday":
                   {

                    $('.sat').append('<tr><td>'+json.data[i].date.gregorian.day+'</td></tr>');
                    break;
                }

                case "Sunday":
                   {

                    $('.sun').append('<tr><td>'+json.data[i].date.gregorian.day+'</td></tr>');
                    break;
                }
              
              }
             
                
            }
  
            })}
          
          
          let gethijri=(city,moth,year)=>{

$.getJSON('http://api.aladhan.com/v1/calendarByCity?city='+city+'&country=pakistan&month='+moth+'&year='+year,function(json)
{
  console.log(city,moth)
 
  if(Object.keys(json.data).length <=31)
  console.log(st)

  
  console.log(json.data[29].date.hijri.day)
for(let i=0;i<=Object.keys(json.data).length-1;i++)
{
  
   switch(json.data[i].date.hijri.weekday.en)
   {

     case "Al Athnayn":
       {                                   
         $('.ath').append('<tr><td>'+json.data[i].date.hijri.day+'</td></tr>')
        
         //$('#ar').html('<b>'+json.data[i].date.hijri.month.en+'</b>'+json.data[i].date.hijri.year)
       break;
    }
    case "Al Thalaata":
       {
       $('.thal').append('<tr><td>'+json.data[i].date.hijri.day+'</td></tr>');
       break;
    }
    case "Al Arba'a":
       {

     $('.arba').append('<tr><td>'+json.data[i].date.hijri.day+'</td></tr>');
       break;
    }

    case "Al Khamees":
       {

        $('.khamees').append('<tr><td>'+json.data[i].date.hijri.day+'</td></tr>');
        break;
    }

    case "Al Juma'a":
       {

        $('.juma').append('<tr><td>'+json.data[i].date.hijri.day+'</td></tr>');
        break;
    }

    case "Al Sabt":
       {

        $('.sabt').append('<tr><td>'+json.data[i].date.hijri.day+'</td></tr>');
        break;
    }

    case "Al Ahad":
       {

        $('.ahad').append('<tr><td>'+json.data[i].date.hijri.day+'</td></tr>');
        break;
    }

   }
  
}


  
})

           

          }
          
          
          
          
          }
        
        
        
        }
