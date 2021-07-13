// creating array of cards

let cards=[ 

    {
        image:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:1,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:1,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMM_rNKb0IJBtRIZdUDqikp3U64fj9dEPdEw&usqp=CAU",
        value:2,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMM_rNKb0IJBtRIZdUDqikp3U64fj9dEPdEw&usqp=CAU",
        value:2,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAneu9c8hLX0CcE3GtmzCVCSHK9FrAsmJ2Yw&usqp=CAU",
        value:3,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAneu9c8hLX0CcE3GtmzCVCSHK9FrAsmJ2Yw&usqp=CAU",
        value:3,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tMMJ0SfQKIRrEWsy0aFckqKWkt0xbCjZoiLVBvjNBy0PTXcgyWctPdm6s8Mk3u_vkLY&usqp=CAU",
        value:4,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tMMJ0SfQKIRrEWsy0aFckqKWkt0xbCjZoiLVBvjNBy0PTXcgyWctPdm6s8Mk3u_vkLY&usqp=CAU",
        value:4,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:5,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:5,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1544923408-75c5cef46f14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFycm90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:6,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1544923408-75c5cef46f14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFycm90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:6,
        status:"closed"
    },
    {
        image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg",
        value:7,
        status:"closed"
    },
    {
        image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg",
        value:7,
        status:"closed"
    },
    {
        image:"https://disneynews.us/wp-content/uploads/2021/05/Thor-Odinson-300x282.jpg",
        value:8,
        status:"closed"
    },
    {
        image:"https://disneynews.us/wp-content/uploads/2021/05/Thor-Odinson-300x282.jpg",
        value:8,
        status:"closed"
    },

    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0M5JsdlhCmzW7rbWjrCXHoxAE0gtoHvjZTzabJo-d-ZPl0J9TfXlVQ56PtYfC5pc8RQ&usqp=CAU",
        value:9,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0M5JsdlhCmzW7rbWjrCXHoxAE0gtoHvjZTzabJo-d-ZPl0J9TfXlVQ56PtYfC5pc8RQ&usqp=CAU",
        value:9,
        status:"closed"
    },
    

] ; 



//durnsten shuffling algorithm

// shuffle logic to shuffle array

let temp;
for (let i=cards.length-1;i>=0;i--){ 
     let j=Math.floor(Math.random()*(i+1));  //multiply the i+1 ((i+1)->means anything not i)with some random value that may comes in float.so use Math.floor to round the value to its lowest value.EG:1.9 BECOMES 1 NOT 2. 

    temp=cards[i]
    cards[i]=cards[j]
    cards[j]=temp
} 

let cardsCopy=cards;


// forEach means it loop through every card in cards
// data is an assumed array which contains cards.because in future we may add more card
// $ used to add variable to string.In line 118 ,the whole thing(class and style)are string,so using $ to add variable called image.
function displayCards(data){ 
    let cardsString=""; 
    //in data for each card
    data.forEach(function(card,index){
        cardsString+=`
   
    <div class="card" style="background-image:url('${card.image}')">
    <div class="overlay ${card.status}" onclick="openCard(${index})" ></div> 
    </div>    


    `; 
    // line 122 is inline-html(div) and in-line css(style)
    /* wkt cards is a array and every card inside cards is object.here we assumed(line 115)any one card which contains image,value and status property but we want only
    image property.so we mentioned (line 118) card.image.likewise */ 
    // line 123,overlay is just a random name. and using status of every card as class of div (which is inside card div and card div is inside cards div).
});

document.getElementById('cards').innerHTML=cardsString; //innerHTML includes cardString inside the div whose Id=cards.

}
displayCards(cards); //this card goes to data in line 116 and then get into function in line 119 then eachcard is assumed.


let cardCount=1;
let val1,val2;
let score=0;
function openCard(index){

        cards[index].status="opened";
        if(cardCount===1){
            val1=cards[index].value;
            cardCount++;
        }
        else if(cardCount===2){
            val2=cards[index].value;

            if(val1===val2){
                score++;
                document.getElementById('score').innerText=score; 

                // reset after one correct guess(one point)
                val1=null;
                val2=null;
                cardCount=1;
            } 
        else{

            location.reload();
            alert("Wrong guess! Try again");

        }
    
        }
        displayCards(cards);

}





