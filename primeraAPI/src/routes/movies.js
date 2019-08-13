const {Router}= require('express');
const router= Router();
const _ = require('underscore');

const movies= require('../sample.json');
//console.log(movies);

router.get('/',(req, res)=>{
    res.json(movies);
   // res.send('movies');
});

router.post('/',(req, res)=>{
    const {tittle, director, year, rating} = req.body;
    if(tittle && director && year && rating){
        const id= movies.length+1;
        const newMovie = {...req.body,id};
        //console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    } else {
        //res.json('wrong request');
        res.json({error: 'There was an error'});
    }
});


router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {tittle, director, year, rating} = req.body;
    if (tittle && director && year && rating){
        _.each(movies,(movie,i)=>{
            if(movie.id==id){
                movie.tittle=tittle;
                movie.director=director;
                movie.year=year;
                movie.rating=rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error:'There was an error'});
    }
});

router.delete('/:id',(req,res)=>{
    const { id }= req.params;
    _.each(movies,(movie,i)=>{
        if(movie.id==id){
            movies.splice(i,1);
        }
    });
    res.send(movies);
})



module.exports= router;