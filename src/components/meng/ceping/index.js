import React from "react";
import {Cep} from "./styled";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
class Ceping extends React.Component {
    render() {
        let {cepinglists}=this.props;
        console.log(cepinglists)
        return (
            cepinglists.map((item,index)=>(
                <Cep key={index}>
                    <div className="content">
                        <div className="top">
                            <a href="">
                                <div className="left">
                                    <img src={item.data.cover.img_url} alt=""/>
                                </div>
                                <div className="right">
                                    <h3>{item.data.title}</h3>  
                                    <p>{item.data.describe}</p>
                                </div>
                            </a>
                        </div>  
                        <div className="bot">
                            <span className="imgone"><img src={item.data.user.avatar.img_url} alt=""/></span>
                            <span className="text">{item.data.user.username}</span>
                            <span className="imgtwo"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAEjUlEQVRYR61Xb4hUVRT/nftmHRZcBGkjlMBch7nnPXC/RNQns6IQIoL+mYJEEEQplVobWwllpf3RrBS/BIGlrpn0IYoiaq0PFbQsy8J7906zaCUh2R+IhGqduSfOMrPM6phvRg8MDO+d87u/c849v3sfoQtL03ReFEUvicg6AHUROSAiTyRJMt0pHHUaoP5Zlu0kosdaY0VkVxzHc57lwe6YQKVSWRxCmCKinlqttiKKIiGir0SkZowZKJfLP+dZuOnTMQHn3JsA1gMYYeZ7GxU5SESrAexhZn2X2zoi0Jp9FEXLS6VSpiulaRpHUTQJ4AwRLeukCh0RaGYvIofiONaMZ805dxCAPtvNzBvyliA3gYmJicXFYnEKwLwQwvIkSdLWRarValyv1ydF5IwxJncVchNwzr0BYAMRHbLWzsm+ScR7PyIi93RShXMIjI6OFvr7+5f09PSUQgjLAJQav5UAetpl3ySQpmlijJnZCwCOAvieiHRiqvV6fYqZjxNRrbVyMwScc2sA6I4uA1iiC7XrIRG9Z63VDM9rWZYdIqK7z+NwRkR+JCJPRCPW2v2UZdkQEW1vCQgAfhKRKWNMNYRQ1Sz0f61WO3YhtRsbG+vp6+sb0OqJSLN6JZ0OIrpSRKKWtYbJOfcLgMtFZH2hUPiCiI6VSqV/8+7iTvyq1WpRRJaKyMoQwh4Ap5TAKQD9RLTKWvtJJ4Dd+jrnbgGga/2mBLYAeBbAP8aYO8rl8sfdAueJq1Qqq0TkiIj0hhCeIxEh772OmErotIisjuP4gzxgnfpUKpXbQwgjAIoq29baDbNj6Jx7BcBmPVSIaB0zq7JdMsuybDUR7WtM2A5m3qzgc3TAOaet2EJE9Xq9/kCSJG9fCgbOufsAvAUgIqKt1lpt+4ydI0TOuScBvAhAj9n11tq9F0PCe/+giOiOpxDC00mSKPastZVi7/0jIvKaeoUQ1iVJ8m43JLz3a0XknZlMiTZaa3edjXPes8A5dxjAnar/zLy7GwJZlj1MRBp7hJkV6xz7PwJfA7gOwPXM/GU3BJxzKxpnwrfMrFi5Cag+/AmgD8BlzPx7NwROnDix8PTp0xr7l7V2ARFJrhY45/RAOg7gJDMv6mbxZoxzTu+Ii6anp5cODg4q5hxr2wLn3K0APgTwGTPffJEEPgWgGLcxs2LmIqCjuA3ATmbe1I5AmqY3GmOeb0yKjtfn7fycczsAbAQwzMyKmYvAfgBriOh+a+0cMcqy7FoiegHADWdhjQJ4ipm/aX3eECHFOMDMa3MR8N5PiMigMeaacrn8nQZVKpXBEMJWANoebd0fAFS+1R4HsFDFC8BHIYRnkiSZ0Bfe+6tFRDEmmXkwL4EpERkwxtxUq9VOEpHK810AjO5oEXm9WCy+OjAwoJOCsbGxBfPnz98kIo82JieIyPsiotJ+hTFG2/MDM1+Vi0DzYDrL+W8AewuFwvZSqfRru36Pj4/39/b2DgF4CEBvq48qaxzHuhcuvAcaH58vi4j2TK9oh40x2/J+cHjvF4UQhvVuKCIFY8y+KIqG2t20/gM5WAQXQSmP/wAAAABJRU5ErkJggg==" alt=""/></span>
                            <span>{item.data.favnums}</span>
                        </div>
                    </div>
            </Cep>
            ))

        )
    }
    componentDidMount(){
        this.props.cepingData();
    }

}
export default Ceping;