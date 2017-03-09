const {EventEmitter} = requrie('events')
const emitter = new EventEmitter();

//create an event handler
let connectHandler = () => {
  console.log('connection successful')

  //fire the data received event
  emitter.emit('data received')
  }

  //Bind the connection event with the handler
  emitter.on('connection', connectHandler)


  //Bind the data_received

  emitter.on('data_received', ()=>{
    console.log("data received successful")
  })

  //Fire
  emitter.emit("connection");
   console.log("Program Ended")
