let arr = [1,2,3,4,5]

arr.push(6); // ka mtlb hai last index me value add krna
arr.pop(); // ka mtlb hai last index me value delete krrna

arr.unshift(0);  // start me value add krna
arr.shift();  // start me value delete krrna 

// arr.slice(2);
arr.splice(1,3); // splice me (first me index or , end me kitni value us index se delete krni hai)

arr.forEach(
    function (val) {
        console.log(val+2);
        
    }
)


// forEach kabhi bhi main array me koi bhi change nahi karta 

console.log(arr);


