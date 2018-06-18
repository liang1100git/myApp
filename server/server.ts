// const express = require('express')
import express from 'express';

const app = express();

const server = app.listen(5005,()=>{
    console.log("服务器监听端口5005")
})

app.get('/',(req:any,res:any)=>{
    res.send("测试")
});
