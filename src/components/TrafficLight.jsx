function TrafficLight() {

  return (
  <div className="d-flex flex-column flex-md-row p-1 mt-lg-5 gap-4 py-md-1 justify-content-center align-items-center bg-black rounded-4">
    <div className="list-group">
        <div className="rounded-circle bg-danger m-1" style={{ width: '100px', height: '100px' }}></div>
        <div className="rounded-circle bg-warning m-1" style={{ width: '100px', height: '100px' }}></div>
        <div className="rounded-circle bg-success m-1" style={{ width: '100px', height: '100px' }}></div>
    </div>
  </div>

  )
}

export default TrafficLight
