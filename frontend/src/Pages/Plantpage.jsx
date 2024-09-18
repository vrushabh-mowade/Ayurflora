import { Link } from 'react-router-dom';



export const Plantpage = () => {
    return <>
        this is the plant page
        <div>
            <div class="relative group">
                <div class="cursor-pointer">
                    Hover 2
                </div>
                <div id="doc2" class="absolute invisible group-hover:visible ">
                    <div className='grid grid-cols-3'>
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
        </div>


    </>
}