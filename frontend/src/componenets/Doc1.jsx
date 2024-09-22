import { Link } from 'react-router-dom';

export const Doc1 = () => {
    return <>
        <div className='p-6'>
            <div className='grid grid-cols-4 gap-6'>
                {/* Column 1 */}
                <div className="space-y-6">
                    {/* Popular Herbs */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-green-800">Popular Herbs</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Tulsi</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Neem</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Ashwagandha</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Aloe Vera</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Turmeric</Link></li>
                        </ul>
                    </div>
                    {/* Ayurvedic Trees */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-green-800">Ayurvedic Trees</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Indian Gooseberry</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Bel</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Ashoka</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Bahera</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Gamar</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                    {/* Medicinal Herbs */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-green-800">Medicinal Herbs</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Calendula</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Chamomile</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Peppermint</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Hops</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">English Lavender</Link></li>
                        </ul>
                    </div>
                    {/* Rare Herbs */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-green-800">Rare Herbs</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Black Nightshade</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Achyranthes</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Indian Bael</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Asparagus Racemosus</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Aconitum Heterophyllum</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-6">
                    {/* Gardening Tools */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-green-800">Gardening Tools</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Trowel</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Pruning Shears</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Garden Fork</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Watering Can</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Hose Reel</Link></li>
                        </ul>
                    </div>
                    
                    {/* Organic Fertilizers */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-green-800">Organic Fertilizers</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Compost</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Manure</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Bone Meal</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Vermicompost</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Fish Emulsion</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="space-y-6">
                    {/* Flowering Plants */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-green-800">Flowering Plants</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Rose</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Jasmine</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Hibiscus</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Marigold</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Sunflower</Link></li>
                        </ul>
                    </div>
                    
                    {/* Ornamental Plants */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-green-800">Ornamental Plants</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Ficus</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Philodendron</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Peace Lily</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Snake Plant</Link></li>
                            <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Spider Plant</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}
