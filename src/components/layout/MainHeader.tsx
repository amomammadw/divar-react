import AppLogo from '../base/app-logo/AppLogo'
import { MapPinIcon, UserIcon } from '@heroicons/react/24/outline'
import AppButton from '../base/app-button/AppButton'

function MainHeader() {
    return (
        <header className='mt-3 sticky top-5 border-b'>
            <nav className='grid grid-cols-12'>
                <div className='lg:col-span-2'>
                    <div className='flex gap-1'>
                        <AppLogo />

                        <AppButton>
                            <MapPinIcon className='w-6' />
                            تهران
                        </AppButton>

                        <AppButton>
                            دسته ها
                        </AppButton>
                    </div>
                </div>

                <div className='lg:col-span-6'>
                    <input type="text" placeholder='جستجو در همه آگهی ها' className='outline-none bg-gray-200 rounded-md py-2 px-4 w-full' />
                </div>

                <div className='lg:col-span-4'>
                    <div className='flex gap-2 justify-end'>
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

                        <AppButton variant='primary'>
                            ثبت آگهی
                        </AppButton>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default MainHeader