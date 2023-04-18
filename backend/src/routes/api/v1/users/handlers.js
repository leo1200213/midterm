import { prisma } from "../../../../adapters.js";
import { generateToken } from "../../../../csrf.js";
export async function getAllUsers(req, res) {
const allUsers = await prisma.user.findMany();
return res.json(allUsers);
} 
/**
* @param {import('express').Request} req
* @param {import('express').Response} res
*/
export async function createOneUser(req, res) {
    ///console.log(username)
    const user = await prisma.user.create({ data: { name: req.body.name,
                                                    pwd: req.body.pwd} });
    return res.status(201).json(user);
}
/**
* @param {import('express').Request} req
* @param {import('express').Response} res
*/
export async function login(req, res) {
    const {username, pwd } = req.body;
    //console.log(req.body);
    ///console.log(username)
    const user = await prisma.user.findUnique({ where: {name:username} });
    if (user === null)
        return res.status(404).json({error: "Invalid username or password"})
    else if (user.pwd !== pwd){
       // console.log(user.pwd)
        return res.status(404).json({error: "Invalid username or password"})
    }
    else {
        //req.session.name = req.body.name;
        console.log(req.body)
        res.id = user.id;
        //next();
        return res.json(user.id)
    }

}

/**
* @param {import('express').Request} req
* @param {import('express').Response} res
*/
export async function getOneUser(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });
    const user = await prisma.user.findUnique({ where: { id } });
    if (user === null) return res.status(404).json({ error: "Not Found" });
    return res.json(user);
}

/**
* @param {import('express').Request} req
* @param {import('express').Response} res
*/
export async function getCsrfToken(req, res) {
// we generate csrf secret based on session.id,
// so token for userA won't work for userB
const csrfToken = generateToken(res, req);
req.session.init = true;
res.json({ csrfToken });
} 