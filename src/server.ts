import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger:true});

server.register(cors, {
    origin:"*",
    methods:["GET"]
});

const teams =[
    {id:1, name:"McLaren", base:"Woking, Reino Unido"},
    {id:2, name:"Mercedes", base:"Stuttgart, Alemanha"},
    {id:3, name:"Red Bull Racing", base:"Milton Keynes Reino Unido"}
];

const drivers =[
    {id:1, name:"Lando Norris", teams:"McLaren"},
    {id:2, name:"George Russell", teams:"Mercedes"},
    {id:3, name:"Max Verstappen", teams:"Red Bull Racing"}
];

server.get("/teams", async (request, response)=>{
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async (request, response)=>{
    response.type("application/json").code(200);
    return {drivers};
});

interface driversParams{
    id:string;
}

server.get<{Params:driversParams}>("/drivers/:id", async (request, response)=>{
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id)
    if(!driver){
        response.type("application/json").code(404);    
        return {message: "Drivr Not Found"};
    }else{
        response.type("application/json").code(200);
        return {driver};
    }
    
});


server.listen({port:3333}, ()=>{
    console.log("Serve init");
});