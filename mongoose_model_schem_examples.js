const mongoose=require('mongoose');

//establishing connection
mongoose.connect('mongodb://localhost:27017/test1')
.then(console.log("connection established.."))
.catch((err)=>{
    console.log("connection not established")
})

//creating Schema and Model
// const mongoose=require('mongoose');

const playlistSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        lowercase:true
    },
    ctype:String,
    vds:Number,
    auther:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now()
    }
})

const Playlist=new mongoose.model("Playlist",playlistSchema);

const makeDoc=async ()=>{

    const htmlplaylist=new Playlist({
        name:"html tutorials",
        ctype:"frontend",
        vds:10,
        auther:"Aryaman",
        active:1,
    })
    const cssplaylist=new Playlist({
        name:"css tutorials",
        ctype:"frontend",
        vds:20,
        auther:"Aryaman",
        active:1,
    })
    const jsplaylist=new Playlist({
        name:"js tutorials",
        ctype:"frontend",
        vds:40,
        auther:"Aryaman",
        active:1,
    })
    const Webplaylist=new Playlist({
        name:"Web tutorials",
        ctype:"Web",
        vds:50,
        auther:"Aryaman",
        active:1,
    })
    const Mongoplaylist=new Playlist({
        name:"Mongodb tutorials",
        ctype:"backend",
        vds:40,
        auther:"Aryaman",
        active:1,
    })
    const mongooseplaylist=new Playlist({
        name:"Mongoose tutorials",
        ctype:"backend",
        vds:50,
        auther:"Aryaman",
        active:1,
    })
    const Expressplaylist=new Playlist({
        name:"Express js tutorials",
        ctype:"Backend",
        vds:20,
        auther:"Aryaman",
        active:1,
    })

    await Playlist.insertMany([htmlplaylist,cssplaylist,jsplaylist,mongooseplaylist,Mongoplaylist,Expressplaylist,Webplaylist]);

}

const find_back=async ()=>{
    const f=await Playlist.find({}).sort({name:-1});
    console.log(f);
}

const updatedoc=async ()=>{
    await Playlist.updateMany({ctype:{$nin:["frontend"]}},{ctype:"backend"});
}

// updatedoc();
makeDoc();
// find_back();

//deletaing the docs
const deleteDocs=async ()=>{
    await Playlist.deleteMany({});
}

// deleteDocs();
