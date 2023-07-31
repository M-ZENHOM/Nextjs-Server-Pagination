import { getProducts } from '@/lib/products'
import Link from 'next/link'
import { FC } from 'react'
import Search from './Search'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { Item } from '@/types'

interface pageProps {
    searchParams: { [key: string]: string | string[] | undefined }
}

const Products: FC<pageProps> = async ({ searchParams }) => {
    const limit = typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 12
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
    const search = typeof searchParams.search === 'string' ? searchParams.search : ""
    const minPrice = typeof searchParams.minPrice === 'number' ? searchParams.minPrice : 100
    const maxPrice = typeof searchParams.maxPrice === 'number' ? searchParams.maxPrice : 500
    const products = await getProducts(limit, page, search, minPrice, maxPrice)

    return (
        <section className='py-24'>
            <div className='container'>
                <div className='mb-12 flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-between gap-x-16'>
                    <h1 className='text-3xl font-bold'>Products</h1>
                    <div className='grow'>
                        <Search search={search} />
                    </div>
                    <div className='flex space-x-6'>
                        <Link className={`${page <= 1 && 'pointer-events-none opacity-50'} ${cn(buttonVariants({ size: "sm" }))}`}
                            href={{ pathname: '/products', query: { ...(search ? { search } : {}), page: page > 1 ? page - 1 : 1, limit: limit, } }}>Previous</Link>
                        <Link className={`${cn(buttonVariants({ size: "sm" }))}`}
                            href={{ pathname: '/products', query: { ...(search ? { search } : {}), page: page + 1, limit: limit, } }}>Next</Link>
                    </div>
                </div>
                <div className='grid grid-cols-fluid gap-5 place-items-center'>
                    {products.length > 0 ? products?.map((item: Item) => (
                        <ProductCard key={item.id} item={item} />
                    )) : (
                        <h2 className=' text-gray-500'>There is no products match your search!</h2>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Products