import AppLogo from '../base/app-logo/AppLogo'

function MainHeader() {
    return (
        <header>
            <nav className='flex justify-between'>
                <div className='flex items-center'>
                    <AppLogo />
                    <button>تهران</button>
                    <button>دسته ها</button>
                    <input type="text" placeholder='جستجو در همه آگهی ها' className='outline-none bg-gray-300 rounded-lg py-2 px-4' />
                </div>

            </nav>
        </header>
    )
}

export default MainHeader