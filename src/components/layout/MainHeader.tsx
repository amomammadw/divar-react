import AppLogo from '../base/app-logo/AppLogo'
import { MapPinIcon, UserIcon } from '@heroicons/react/24/outline'
import AppButton from '../base/app-button/AppButton'

function MainHeader() {
    return (
        <header className='mt-3 sticky top-5'>
            <nav className='flex justify-between'>
                <div className='flex items-center'>
                    <AppLogo />

                    <AppButton>
                        <MapPinIcon className='w-6' />
                        تهران
                    </AppButton>

                    <AppButton>
                        دسته ها
                    </AppButton>

                    <input type="text" placeholder='جستجو در همه آگهی ها' className='outline-none bg-gray-200 rounded-md py-2 px-4' />
                </div>

                <div className='flex'>
                    <AppButton>
                        <UserIcon className='w-6' />
                        دیوار من
                    </AppButton>

                    <AppButton>
                        چت
                    </AppButton>

                    <AppButton>
                        پشتیبانی
                    </AppButton>

                    <AppButton>
                        ثبت آگهی
                    </AppButton>
                </div>

            </nav>
        </header>
    )
}

export default MainHeader