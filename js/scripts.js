$(document).ready(function() {
  $("form#stress_survey").submit(function(event) {
    event.preventDefault();
    const inputName = ["warning-signs", "stress-causes", "coping-methods"]
    let warningSignsTotal = 0;
    let stressCausesTotal = 0;
    let copingMethodsTotal = 0;

    inputName.forEach(function(element) {
      $("input:checkbox[name="+element+"]:checked").each(function() {
        if (element === "warning-signs") {
          warningSignsTotal+=1
        }
        if (element === "stress-causes") {
          stressCausesTotal+=1
        }
        if (element === "coping-mthods") {
          copingMethodsTotal+=1
        }
      })
    })

    
    // let warningSignsChecked = [];
    // $("input:checkbox[name=warning-signs]:checked").each(function() {
    //   warningSignsTotal+=1;
    //   warningSignsChecked.push($(this).val());
    // });

    
    // let stressCausesChecked = [];
    // $("input:checkbox[name=stress-causes]:checked").each(function() {
    //   stressCausesTotal+=1;
    //   stressCausesChecked.push($(this).val());
    // });

    
    // let copingMethodsChecked = [];
    // $("input:checkbox[name=coping-methods]:checked").each(function() {
    //   copingMethodsTotal+=1;
    //   copingMethodsChecked.push($(this).val());
    // });

    if (warningSignsTotal>=7 && stressCausesTotal>=7) {
      $("#high-risk").show();
    } else if (warningSignsTotal>=4 && stressCausesTotal >=4) {
      $("#medium-risk").show();
    } else if (warningSignsTotal>=0 && stressCausesTotal >=0) {
      $("#low-risk").show();
    }

    $('#stress_survey').hide();
  });
});


// $("#work-responses").show();
// $("input:checkbox[name=work-transportation]:checked").each(function(){
//   const workTransportationMode = $(this).val();
//   $('#work-responses').append(workTransportationMode + "<br>");
// });
// $("#fun-responses").show();
// $("input:checkbox[name=fun-transportation]:checked").each(function(){
//   const funTransportationMode = $(this).val();
//   $('#fun-responses').append(funTransportationMode + "<br>");
// });
// $('#transportation_survey').hide();
// });
// });