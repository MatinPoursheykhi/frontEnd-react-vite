export default function User({data,getUserInfo,deleteUser}) {
    return (
        <div className="px-3">
            {data.map((item,i)=>{
                return (
                    <div key={i} className="cards">
                        <h4>firsName:<span>{item.firstName}</span></h4>
                        <h4>lastName:<span>{item.lastName}</span></h4>
                        <h4>age:<span>{item.age}</span></h4>
                        <h4>mobile:<span>{item.mobile}</span></h4>
                        <h4>email:<span>{item.email}</span></h4>
                        <div className="w-1/4 h-full flex justify-end items-center">
                            <button className="btn" onClick={()=>deleteUser(item)}>Delete</button>
                            <button className="btn" onClick={()=>getUserInfo(item)}>Edit</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}