const express = require("express")
const Post = require("./model") // new
const router = express.Router()

// Get all posts
router.get("/posts", async (req, res) => {
	const posts = await Post.find()
	res.send(posts)
})

// router.get('/post/:id',async(req,res)=>{
// 	var query  = Post.where({ _id: req.params.id });
// 	query.findOne(function (err, employee) {
//         if (err)
//             return res.send(err)
//         res.json(employee);
//         });

// })
router.put('/post', async (req, res) => {
	var id = req.query.id
	console.log(id)
	const posts = await Post.findByIdAndUpdate(req.query.id,{title:req.body.title})
	await posts.save()

	res.send(posts)
})

// router.route('/posts').get((req,res)=>{
//     Post.find()
//     .then(foundTemplate=>res.json(foundTemplate))  
// })

router.route('/posts').post(async(req,res)=>{
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
	})
	await post.save()
	res.send(post)
})

router.route('/posts').delete(async(req,res)=>{
    res.send("Deleted")
})




// router.route('/posts').post(async(req,res)=>{
//     const newtemp = new schema({
// 		title: req.body.title,
// 		content: req.body.content,
// 	})
//     console.log(newtemp)
//     await newtemp.save()
//     res.send(newtemp)
//     //     console.log(JSON.stringify(req.body))
//     // res.send("hello")
// })


module.exports = router