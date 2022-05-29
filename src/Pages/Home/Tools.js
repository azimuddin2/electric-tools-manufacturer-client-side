import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tool')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const toolsCollection = tools.slice(0, 6);

    return (
        <div className='px-8 mt-4 mb-12'>
            <h1 className='text-center font-bold text-cyan-500 text-xl'>What Our Have</h1>
            <h1 className='text-center text-4xl font-normal uppercase mb-10'>Electric Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    toolsCollection?.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
            <div className='review-button'>
                <div className='review-border'></div>
                <button className='btn-review'>
                    <Link className='text-white text-decoration-none'
                        to={'/reviews'}>SHOW ALL CARS
                        <FontAwesomeIcon className='ml-1' icon={faArrowRightLong}></FontAwesomeIcon>
                    </Link>
                </button>
                <div className='review-border'></div>
            </div>
        </div>
    );
};

export default Tools;