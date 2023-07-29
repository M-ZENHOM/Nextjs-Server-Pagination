import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
    return (
        <section className='py-24'>
            <div className='container'>
                <div className='mb-12 flex items-center justify-between gap-x-16'>
                    <Skeleton className="h-4 w-[150px]" />
                    <div className=' grow'>
                        <Skeleton className="h-4 w-[800px]" />
                    </div>
                    <div className='flex space-x-6'>
                        <Skeleton className="h-10 w-[80px] rounded-md" />
                        <Skeleton className="h-10 w-[80px] rounded-md" />
                    </div>
                </div>
                <div className='grid grid-cols-fluid gap-5 '>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((h, i) => (
                        <Card key={i} className="w-[300px]">
                            <CardHeader>
                                <CardTitle> <Skeleton className="h-4 w-[250px]" /></CardTitle>
                                <CardDescription> <Skeleton className="h-4 w-[200px]" /></CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-4 w-[100px]" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default loading