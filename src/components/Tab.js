import { useEffect, useState } from "react";

function Tab ({children, activeTab, onChange}) {   
    // console.log(children) 
    const [active, setActive] = useState(activeTab)

    useEffect(() => {
        setActive(activeTab)
    },[activeTab])

    useEffect(() => {
        onChange(active)
    }, [active])

    return(
        <div>
            <nav>
                {children.map((tab, index) => (
                  <button 
                    onClick={() => setActive(index)}
                    className={activeTab === index ? 'bg-green-400 text-white' : 'bg-gray-100'}
                    key={index}>
                        {tab.props.title}
                  </button>
                ))}
            </nav> 
            {children[activeTab]}
        </div>
    )
}
 

export default Tab; 