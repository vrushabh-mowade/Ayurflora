import { Link } from 'react-router-dom';
import PlantCard from '../componenets/app.jsx';
import SearchBar from '../componenets/SearchBar.jsx';
import { Doc1 } from '../componenets/Doc1.jsx';
import { Doc2 } from '../componenets/Doc2.jsx';
import { Doc3 } from '../componenets/Doc3.jsx';
import { Doc4 } from '../componenets/Doc4.jsx';


export const Homepage = () => {
    return (
        <>
            <div className='px-0.5'>
                <div className="bg-flower bg-cover  h-144">
                    <div className='flex text-white text-lg py-12 px-96 '>
                        <div className="relative group">
                            <div className="cursor-pointer ">
                                <Link to={"/"} > Ayurveda</Link>
                            </div>
                            <div id="doc1" className="absolute invisible group-hover:visible bg-white shadow-lg rounded-lg overflow-hidden w-[800px] mt-2 z-50">
                                <Doc1 />
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="cursor-pointer">
                                <Link to="/Time">
                                    <div className="px-2">Yoga & Naturopathy</div>
                                </Link>
                            </div>
                            <div id="doc2" className="absolute invisible group-hover:visible bg-white shadow-lg rounded-lg overflow-hidden w-[800px] mt-2 z-50">
                                <Doc2 />
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="cursor-pointer">
                                <Link to="/Time">
                                    <div className="px-2">Unani & Siddha</div>
                                </Link>
                            </div>
                            <div id="doc2" className="absolute invisible group-hover:visible bg-white shadow-lg rounded-lg overflow-hidden w-[800px] mt-2 z-50">
                                <Doc3 />
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="cursor-pointer">
                                <Link to="/Time">
                                    <div className="px-2">Homeopathy</div>
                                </Link>
                            </div>
                            <div id="doc2" className="absolute invisible group-hover:visible bg-white shadow-lg rounded-lg overflow-hidden w-[800px] mt-2 z-50">
                                <Doc4 />
                            </div>
                        </div>

                    </div>
                </div>
                <div><SearchBar /></div>

                <div className='flex flex-row'>
                    <div className='pl-2'>
                        <PlantCard plant={{
                            name: "Rose",
                            image: "https://imgs.search.brave.com/IzU_psraKXM9QpYHbrBMu3r_UsGuLp5bKYNlz3oic1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NDQxNjQ2L3Bob3Rv/L3Jvc2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVpUa1Fr/WkFQU2E5c1BQQlQ5/UnhVREUxXzdXUzBV/MEdqakZ4NmRxZTFY/MDg9",
                            description: "The rose is a flowering plant known for its beauty and fragrance.",
                            cientificName: "haula"
                        }} />
                    </div>
                    <div className='px-4'>
                        <PlantCard plant={{
                            name: "Rose",
                            image: "https://imgs.search.brave.com/IzU_psraKXM9QpYHbrBMu3r_UsGuLp5bKYNlz3oic1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NDQxNjQ2L3Bob3Rv/L3Jvc2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVpUa1Fr/WkFQU2E5c1BQQlQ5/UnhVREUxXzdXUzBV/MEdqakZ4NmRxZTFY/MDg9",
                            description: "The rose is a flowering plant known for its beauty and fragrance.",
                            cientificName: "haula"
                        }} />
                    </div>


                </div>
                <div className='flex flex-row py-2'>
                    <div className='pl-2'>
                        <PlantCard plant={{
                            name: "Rose",
                            image: "https://imgs.search.brave.com/IzU_psraKXM9QpYHbrBMu3r_UsGuLp5bKYNlz3oic1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NDQxNjQ2L3Bob3Rv/L3Jvc2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVpUa1Fr/WkFQU2E5c1BQQlQ5/UnhVREUxXzdXUzBV/MEdqakZ4NmRxZTFY/MDg9",
                            description: "The rose is a flowering plant known for its beauty and fragrance.",
                            cientificName: "haula"
                        }} />
                    </div>
                    <div className='px-4'>
                        <PlantCard plant={{
                            name: "Rose",
                            image: "https://imgs.search.brave.com/IzU_psraKXM9QpYHbrBMu3r_UsGuLp5bKYNlz3oic1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NDQxNjQ2L3Bob3Rv/L3Jvc2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVpUa1Fr/WkFQU2E5c1BQQlQ5/UnhVREUxXzdXUzBV/MEdqakZ4NmRxZTFY/MDg9",
                            description: "The rose is a flowering plant known for its beauty and fragrance.",
                            cientificName: "haula"
                        }} />
                    </div>
                </div>
            </div>
        </>
    );
};



