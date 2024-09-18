import { Link } from 'react-router-dom';






export const Homepage = () => {
    return <>
        <div className="bg-flower bg-cover bg-center h-72">
            <div className='flex text-white text-sm py-12 px-96 '>
            <div className="relative group ">
                <div class="cursor-pointer">
                    Ayurveda
                </div>
                <div id="doc2" className="absolute invisible group-hover:visible text-black">
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
                            {/* Text Item 3 */}
                            <h3 className="font-semibold text-lg mb-2">Text 3</h3>
                            <ul className="space-y-1">
                                <li><Link to="/">Sub Link 1</Link></li>
                                <li><Link to="/">Sub Link 2</Link></li>
                                <li><Link to="/">Sub Link 3</Link></li>
                                <li><Link to="/">Sub Link 4</Link></li>
                                <li><Link to="/">Sub Link 5</Link></li>
                            </ul>
                            {/* Text Item 4 */}
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
                            {/* Text Item 5 */}
                            <h3 className="font-semibold text-lg mb-2">Text 5</h3>
                            <ul className="space-y-1">
                                <li><Link to="/">Sub Link 1</Link></li>
                                <li><Link to="/">Sub Link 2</Link></li>
                                <li><Link to="/">Sub Link 3</Link></li>
                                <li><Link to="/">Sub Link 4</Link></li>
                                <li><Link to="/">Sub Link 5</Link></li>
                            </ul>
                            {/* Text Item 6 */}
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
                <Link to={"/Time"}>
                    <div className='px-2'>Yoga & Naturopathy</div>
                </Link>
                <Link to={"/Time"}>
                    <div className='px-2'> Unani & Siddha</div>
                </Link>
                <Link to={"/Time"}>
                    <div className='px-2'>Homeopathy</div>
                </Link>
                <div className="relative group">
                <div className=" cursor-pointer">
                    hello
                </div>
                <div id="doc2" className="absolute bg-white invisible group-hover:visible">
                    <ul className="">
                        <li>
                            <Link to={"/"}>
                                <div>
                                    link
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <div>
                                    link
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <div>
                                    link
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>

    </>



}