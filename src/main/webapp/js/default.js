/*
 * 2016.10.16
 * Javascript 별개파일로 분리
 * */

$(function(){
    	if($('.btn_login')){
    		$( "#dialog" ).dialog({
    	      	  autoOpen: true
    	        });
    	}
     });
    $(function(){
    	$('#btn-login').click(function(){
    		$.ajax({
       	        // type을 설정합니다.
       	        type : 'GET',
       	        cache: false,
       	        url : "/sample/sessionch.do",
       	        // 사용자가 입력하여 id로 넘어온 값을 서버로 보냅니다.        	              	    
       	        success : function (data) {
       	        	alert("a " + data);
       	            if (document.listForm.selectedId.value !="") {
       	            	document.listForm.action = "/sample/updateSampleView2.do";
       	               	document.listForm.submit();        	            	     	            	               
       	            } else {
       	            	$('#dialog').dialog('close');        	            	
       	            }
       	        }     
       	    });
    		
    	});
    	
    });
    
    /* 글 수정 화면 function */
    function fn_egov_select(id) {
     document.listForm.selectedId.value = id;
   	 alert("b");
   	  $.ajax({
   	        // type을 설정합니다.
   	        type : 'GET',
   	        cache: false,
   	        url : "/sample/sessioninfo.do",   	             	              	    
   	        success : function (data) {       	   	            
   	            if (data == "true") {
   	            	/* window.open("","detail", "width=370, height=360, resizable=no, scrollbars=no, status=no");
   	            	document.listForm.target ="detail";
   	                 */
   	                document.listForm.action = "/sample/updateSampleView2.do";
   	               	document.listForm.submit();
   	            } else {
   	            	$('#dialog').dialog('open');
   	            }             
   	        }    	        
   	    });          	
	}
    
   
    
    
      
          
        /* 글 목록 화면 function */
        function fn_egov_selectList() {
        	document.listForm.action = "/sample/egovSampleList2.do";
           	document.listForm.submit();
        }
        
        /* 글 등록 화면 function */
        function fn_egov_addView() {
           	document.listForm.action = "/sample/addSample2.do";
           	document.listForm.submit();
        }    
        
        /* pagination 페이지 링크 function */
        function fn_egov_link_page(pageNo){
        	document.listForm.pageIndex.value = pageNo;
        	document.listForm.action = "/sample/egovSampleList2.do";
           	document.listForm.submit();
        }
