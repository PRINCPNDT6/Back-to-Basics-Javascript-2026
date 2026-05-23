function one(){
    console.log('one()');
    
}

function Two(){
    // one()
    console.log('Two()');
    one()
    
}

function Three(){
    // Two()
    console.log('Three()');
    Two()
    
}

Three()