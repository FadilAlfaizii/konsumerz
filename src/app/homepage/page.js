
import Layout from "@/components/layout/Layout"
import Hero3 from "@/components/sections/Hero3"
import MyServices from "@/components/sections/MyServices"
import PopularCategories from "@/components/sections/MyResume"
import Projects from "@/components/sections/Projects"

export default function Home3() {
    return (
        <>
            <Layout>
                <Hero3 />
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <MyServices />
                                <Projects />
                                <PopularCategories />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}