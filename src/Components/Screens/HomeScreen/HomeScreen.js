import React from 'react'
import { collectionList } from '../../../config/dummydata'

const HomeScreen = () => {
    return (
        <div>
           {collectionList.map((item) => <> {item.name} </>)}
        </div>
    )
}

export default HomeScreen
