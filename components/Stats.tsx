const Stats = () => {
    return (
        <div className="mt-5 py-5 bg-gray-50 rounded-lg">
            <div className="flex flex-col md:flex-row justify-around items-center text-center gap-8">
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold text-green-600">1000+</p>
                    <p className="text-gray-500 mt-1">User Berhasil</p>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold text-green-600">50M+</p>
                    <p className="text-gray-500 mt-1">Uang Diselamatkan</p>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold text-green-600">95%</p>
                    <p className="text-gray-500 mt-1">Tingkat Keberhasilan</p>
                </div>
            </div>
        </div>
    );
};
export default Stats;