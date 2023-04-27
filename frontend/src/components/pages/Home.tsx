import React, {FC} from "react";
import {Footer} from "@/components/shared/Footer";
import {Header} from "@/components/shared/Header";
import {AllArticleHeader} from "@/models";
import {ArticleList} from "@/components/shared/ArticleList";
import {homeStyles} from "@/components/pages/Home.css";
import {SideBar} from "@/components/shared/SideBar";

type Props = {
    articles: AllArticleHeader[];
};

export const Home: FC<Props> = ({articles}) => {
    return (
        <div>
            <Header/>
            <main className={homeStyles.container}>
                <ArticleList articles={articles}/>
                <SideBar />
            </main>
            <Footer/>
        </div>
    );
};