const prompt = require('prompt-sync')();
const {Blockchain, Block} = require('./Blockchain');

let eduRecord = new Blockchain();
let index = 1;

eduRecord.addBlock(new Block(index++, new Date(), {S_Id: 11, name: 'Ashif', CGPA: 3.56}));
eduRecord.addBlock(new Block(index++, new Date(), {S_Id: 12, name: 'Ahmed', CGPA: 4.00}));
eduRecord.addBlock(new Block(index++, new Date(), {S_Id: 13, name: 'Miraj', CGPA: 3.98}));
 
while(true)
{
    console.log('\nWelcome to BDSERA\n');
    console.log('\t1. Add Block (Student Data)');
    console.log('\t2. View All Block');
    console.log('\t3. Verify a Student');
    console.log('\t4. Exit');

    const option = prompt('\nEnter Option No. - ');

    if(option == 1)
    {

        const id = prompt('\nEnter Id: ');
        const name = prompt('\nEnter Name: ');
        const cgpa = prompt('\nEnter CGPA: ');

        eduRecord.addBlock(new Block(index++, new Date(), {S_Id: id, name: name, CGPA: cgpa}));

    }
    else if(option == 2)
    {
        console.log(JSON.stringify(eduRecord, null, 4));
    }
    else if(option == 3)
    {
        const id = prompt('\nEnter Id: ');
        
        var _BlockIndex = checkExist(id);

        if(_BlockIndex == null)
        {
            console.log('Student Id ' + id + ' Not Found');
        }
        else
        {
        console.log(JSON.stringify(eduRecord.chain[_BlockIndex], null, 4));
        }
        
    }
    else if(option == 4)
    {
        console.log('Program Exited...');
        break;
    }
    else
    {
        console.log('Wrong Input. Try again');
    }
}

function checkExist(sid)
{
    var _found = false;
    var _index = 0;

    for(let i=1; i<eduRecord.chain.length; i++)
    {
        var _block = eduRecord.chain[i];

        if(_block.data.S_Id == sid)
        {
            _found = true;
            _index = i;
            break;
        }
    }

    if(_found == true)
    {
        return _index;
    }
    else
    {
        return null;
    }
}
