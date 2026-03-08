import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import { Metadata } from "next";
import { LocationClient } from "./LocationClient";

export function generateStaticParams() {
    return locations.map((loc) => ({
        slug: loc.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const location = locations.find((l) => l.slug === resolvedParams.slug);

    if (!location) {
        return { title: 'Bulunamadı - Bayraktar Forklift' };
    }

    return {
        title: `${location.district} Kiralık Forklift | Bayraktar Forklift`,
        description: location.description.slice(0, 160)
    };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const location = locations.find((l) => l.slug === resolvedParams.slug);

    if (!location) {
        notFound();
    }

    return <LocationClient location={location} slug={resolvedParams.slug} />;
}
