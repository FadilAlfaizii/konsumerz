import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/elements/Breadcrumb"
import SingleContent from "@/components/sections/SingleContent"

export default function Single2() {
    return (
        <>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="pt-30 border-bottom border-gray-800 pb-20">
                                    <div className="box-breadcrumbs">
                                        <Breadcrumb title="Digital Design That Will Help You Start Your Business" />
                                    </div>
                                </div>
                                <div className="row mt-50">
                                    <div className="col-lg-6">
                                        <h2 className="color-linear mb-30">Digital Design That Will Help You Start Your Business</h2>
                                        <div className="box-author mb-20"><Image width={48} height={48} src="/assets/imgs/page/about/author2.png" alt="Genz" />
                                            <div className="author-info">
                                                <h6 className="color-gray-700">William Randolph</h6><span className="color-gray-700 text-sm mr-30">25 April 2023</span><span className="color-gray-700 text-sm">3 mins to read</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6"><Image width={542} height={280} className="img-bdrd-16" src="/assets/imgs/page/single/thumb.jpg" alt="Genz" /></div>
                                </div>
                                <div className="row mt-50">
                                    <div className="col-lg-9">
                                        <SingleContent />
                                    </div>
                                    <div className="col-lg-3 pl-40">
                                        <div className="box-share border-gray-800">
                                            <h6 className="d-inline-block color-gray-500 mr-10">Share</h6>
                                            <Link className="icon-media icon-fb" href="#" />
                                            <Link className="icon-media icon-tw" href="#" />
                                            <Link className="icon-media icon-printest" href="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}