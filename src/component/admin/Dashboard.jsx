const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-2 md:mb-4">Total Users</h2>
                    <p className="text-2xl md:text-3xl font-bold">500</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-2 md:mb-4">Revenue</h2>
                    <p className="text-2xl md:text-3xl font-bold">$10,000</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-2 md:mb-4">Orders</h2>
                    <p className="text-2xl md:text-3xl font-bold">200</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-2 md:mb-4">Products</h2>
                    <p className="text-2xl md:text-3xl font-bold">50</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
