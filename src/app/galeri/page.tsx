import { Metadata } from 'next';
import { GalleryClient } from './GalleryClient';

export const metadata: Metadata = {
    title: 'Galeri | Bayraktar Forklift',
    description: 'Güçlü filomuz ve operasyon anlarımızdan kareler.',
};

export default function GaleriPage() {
    return <GalleryClient />;
}
