import { Link } from 'react-router-dom';
import PlantCard from '../componenets/app.jsx';

export const Homepage = () => {
    return (
        <>
            <div className="bg-flower bg-cover bg-center h-80">
                <div className='flex text-white text-sm py-12 px-96'>
                    <div className="relative group">
                        <div className="cursor-pointer">
                            <Link to={"/"}> Ayurveda</Link>
                        </div>
                        {/* Make the dropdown absolute so it doesn't affect the flex layout */}
                        <div id="doc1" className="absolute invisible group-hover:visible text-black w-96 mt-2">
                            <div className='bg-white'>
                                <div className='grid grid-cols-3 bg-white'>
                                    {/* Column 1 */}
                                    <div>
                                        {/* Text Item 1 */}
                                        <h3 className="font-semibold text-lg mb-2">Text 1</h3>
                                        <ul className="space-y-1">
                                            <li><Link to="/">Sub Link 1</Link></li>
                                            <li><Link to="/">Sub Link 2</Link></li>
                                            <li><Link to="/">Sub Link 3</Link></li>
                                            <li><Link to="/">Sub Link 4</Link></li>
                                            <li><Link to="/">Sub Link 5</Link></li>
                                        </ul>
                                        {/* Text Item 2 */}
                                        <h3 className="font-semibold text-lg mt-6 mb-2">Text 2</h3>
                                        <ul className="space-y-1">
                                            <li><Link to="/">Sub Link 1</Link></li>
                                            <li><Link to="/">Sub Link 2</Link></li>
                                            <li><Link to="/">Sub Link 3</Link></li>
                                            <li><Link to="/">Sub Link 4</Link></li>
                                            <li><Link to="/">Sub Link 5</Link></li>
                                        </ul>
                                    </div>

                                    {/* Column 2 */}
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Text 3</h3>
                                        <ul className="space-y-1">
                                            <li><Link to="/">Sub Link 1</Link></li>
                                            <li><Link to="/">Sub Link 2</Link></li>
                                            <li><Link to="/">Sub Link 3</Link></li>
                                            <li><Link to="/">Sub Link 4</Link></li>
                                            <li><Link to="/">Sub Link 5</Link></li>
                                        </ul>
                                        <h3 className="font-semibold text-lg mt-6 mb-2">Text 4</h3>
                                        <ul className="space-y-1">
                                            <li><Link to="/">Sub Link 1</Link></li>
                                            <li><Link to="/">Sub Link 2</Link></li>
                                            <li><Link to="/">Sub Link 3</Link></li>
                                            <li><Link to="/">Sub Link 4</Link></li>
                                            <li><Link to="/">Sub Link 5</Link></li>
                                        </ul>
                                    </div>

                                    {/* Column 3 */}
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Text 5</h3>
                                        <ul className="space-y-1">
                                            <li><Link to="/">Sub Link 1</Link></li>
                                            <li><Link to="/">Sub Link 2</Link></li>
                                            <li><Link to="/">Sub Link 3</Link></li>
                                            <li><Link to="/">Sub Link 4</Link></li>
                                            <li><Link to="/">Sub Link 5</Link></li>
                                        </ul>
                                        <h3 className="font-semibold text-lg mt-6 mb-2">Text 6</h3>
                                        <ul className="space-y-1">
                                            <li><Link to="/">Sub Link 1</Link></li>
                                            <li><Link to="/">Sub Link 2</Link></li>
                                            <li><Link to="/">Sub Link 3</Link></li>
                                            <li><Link to="/">Sub Link 4</Link></li>
                                            <li><Link to="/">Sub Link 5</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other navigation links */}
                    <Link to={"/Time"}>
                        <div className='px-2'>Yoga & Naturopathy</div>
                    </Link>
                    <Link to={"/Time"}>
                        <div className='px-2'>Unani & Siddha</div>
                    </Link>
                    <Link to={"/Time"}>
                        <div className='px-2'>Homeopathy</div>
                    </Link>

                    {/* Another dropdown */}
                    <div className="relative group">
                        <div className="cursor-pointer">
                            hello
                        </div>
                        <div id="doc2" className="absolute bg-white invisible group-hover:visible">
                            <ul>
                                <li>
                                    <Link to={"/"}>
                                        <div>link</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"}>
                                        <div>link</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"}>
                                        <div>link</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

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
        </>
    );
};



