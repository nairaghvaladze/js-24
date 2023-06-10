document.body.style.textAlign="center";
document.body.style.backgroundColor="lightblue";
document.body.style.marginTop="5%";
document.body.style.fontSize="16px";
document.body.style.fontWeight="500";

var array=[ "ავთო", "გიორგი", "ნატალი", "ნიკა",  "გიორგი", "გვანცა", "გიორგი",  "ქეთი", "ლაშა", "მარიამ", "ნინი", "ნიკოლოზ", "ნინი", "ნინო", "ოლია", "თაკო", "ცირა", "დიმიტრი", "ზურაბ", "თაკო", "ნანა", "ნაირა"];
document.getElementById("text").innerHTML=("Chapter1-ის მოსწავლეების სია:"  ) + " "  + array;

function fun(){
 var a=array[0];
 var seperate= " ";
for (var i=1; i<array.length; i++){
    if (array[i].length<= 5){
        a +=seperate+array[i];
        
    }  
    document.getElementById("text2").innerHTML= a;  
}

    
    
    } 
    



