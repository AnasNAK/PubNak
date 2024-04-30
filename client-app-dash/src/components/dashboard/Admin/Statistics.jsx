import React from 'react';
import ChartPosts from '../../chart/ChartPosts';
import Pie from '../../chart/ChartCategories';
import Users from '../../tables/tableUsers'

function Statistics() {
    return (
        <div className='grid grid-cols-5 '>

            <div className='col-span-1'></div>
            <div className='col-span-4 '>
                <div className='flex flex-col gap-9 md:flex-row justify-around'>
                    <ChartPosts />
                    <Pie />
                </div>
                <div>

                </div>
                <Users />

            </div>
        </div>
    );
}

export default Statistics;
