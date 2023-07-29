'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from '@/hooks/use-debounce'
import { Input } from '@/components/ui/input'

const Search = ({ search }: { search?: string }) => {
    const router = useRouter()
    const initialRender = useRef(true)

    const [text, setText] = useState(search)
    const query = useDebounce(text, 500)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        if (!query) {
            router.push(`/products`)
        } else {
            router.push(`/products?search=${query}`)
        }
    }, [query])

    return (
        <div className='relative rounded-md shadow-sm'>
            <Input onChange={e => setText(e.target.value)} type="text" placeholder="Search..." />
        </div>
    )
}

export default Search