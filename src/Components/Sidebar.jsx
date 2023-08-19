export default function Sidebar() {
    return (
        <div>
            <h2>furniture</h2>
            <div>
                <button>all</button>
                <button>owner</button>
                <button>dealer</button>
            </div>
            <div>
                <div>
                <input type="checkbox"/><span>search titles only</span>
                </div>
                <div>
                <input type="checkbox"/><span>has immage</span>    
                </div>
                <div>
                <input type="checkbox"/><span>posted today</span>    
                </div>
                <div>
                <input type="checkbox"/><span>bundle duplicates</span>
                </div>
                <div>
                <input type="checkbox"/><span>include nearby areas</span>
                </div>
            </div>
            <div>
                <h3>miles from zip</h3>
                <input type="text" placeholder="miles" /><input type="text" placeholder="zip" />
            </div>
        </div>
    )
}