import React from 'react';
const Ninjas = ({ ninjas }) => {
    /*const ninjalist = ninjas.map(ninja => {
    return ninja.age > 20 ? (
        <div className='ninja'>
            <div>Id: {ninja.id}</div>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
        </div>
    ) : (null)
})
*/
    return (
        <div className="ninja-lst">
            {
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                        <div className='ninja'>
                            <div>Id: {ninja.id}</div>
                            <div>Name: {ninja.name}</div>
                            <div>Age: {ninja.age}</div>
                            <div>Belt: {ninja.belt}</div>
                        </div>
                    ) : (null)
                })
            }

        </div>
    )
}


export default Ninjas;