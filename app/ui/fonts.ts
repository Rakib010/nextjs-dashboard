import { Inter, Lusitana } from 'next/font/google'
import { Open_Sans } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const OpenSans = Open_Sans({
    subsets: ["latin"],
    weight: ['400', '700']
})
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});