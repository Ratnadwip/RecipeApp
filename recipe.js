    async function showrecipies(){
       
        let data;
        let error;
        let response;
        
        let menu = document.getElementById('input').value;
        console.log(menu)
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`;
        try{
            response = await fetch(url)
            data = await response.json();
            
        }
        catch(err){
             error = err;
        }
        finally{
            if(data.meals){
                
                console.log(data);
                document.getElementById('recipies').innerHTML = '';
                data.meals.forEach((recipe)=>{
                    let recipediv=document.createElement('div');
                    recipediv.classList.add("divstyle");
                    recipediv.innerHTML= `
                    <h3>${recipe.strMeal}</h3>
                    <img src="${recipe.strMealThumb}" />
                    <p>${recipe.strInstructions}</p>
                    <a href="${recipe.strYoutube}" target="_blank">Watch on YouTube</a>`;
                    document.getElementById('recipies').appendChild(recipediv);
                    
                })

    
                
            }
            else{
                document.getElementById('recipies').innerHTML=`<p>result not found</p>`
    
            }
           }
    
    }
   




