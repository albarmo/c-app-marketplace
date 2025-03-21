'use client'
import React from 'react'
import Link from 'next/link'

interface I_PropsPromoCard {
    data: {
        title: string
        image: string
        href: string
    }
}

export default function PromoCard({ data }: I_PropsPromoCard) {
    return (
        <Link href={data?.href}>
            <article aria-description={data?.title} className="h-36 w-72 min-w-72 snap-center border rounded-xl bg-[url('https://s3-alpha-sig.figma.com/img/6bf3/a251/10d323e2acbc1239728ca8b832309f46?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e9-llTXjkhCTec5l8mIn3kzUw7Ri9LxdREtux5qYwEe0~g0Ah30o94q2qXi7k201izis4umT-vmzKo9wWJq60jbI3eg026-fAZYZi~DViCSbDJoNs8ThhN9BAASbDykmBTEKvyk6cJGws8oO-wKr~ovsT9HsMGcjiAU0de9IBuxEQcrPkfZ8gYnzZ8yY85NjNsfilEdxq66xrfSjCy6IVFL17JOxeJDQ1d6VKHYkkCkwJt537HCpgr1-vH3rG9LLxr7mPCXzeDjB6Ri~IiY8wwc3YdeUVCLeYZ7P~rvwBofi3sW96-zVBWzSEyRmmvoW~8cnet63dILDF-vJfLiQYg__')] bg-cover" />
        </Link>
    )
}
