# AWS: S3 and Lambda

# Review, Research, and Discussion

![](https://awscomputeblogimages.s3-us-west-2.amazonaws.com/resizefly_picture01.png)
> Amazon S3 service is used for file storage, where you can upload or remove files. ... AWS Lambda has a handler function which acts as a start point for AWS Lambda function. The handler has the details of the events.

**Describe “The Cloud”**

- it is a computer that you used but this computer exists in another place than you.
![](https://www.vmware.com/content/dam/digitalmarketing/vmware/en/images/gallery/thumbnails/tn-video-thumbnail-2.jpg)


**What is a container (as it relates to computers and servers)?**

- A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.
>A basic application container environment, as seen in Figure 2, runs on physical -- or virtual and physical -- hardware, a host OS and a container virtualization layer directly on the OS. Containers share the OS and its functions instead of running individual OS instances.

**What is auto-scaling?**

- it is a process in the cloud computing that increase the capacity of the instances dynamicaally when our application need that.
![](https://docs.aws.amazon.com/autoscaling/ec2/userguide/images/as-basic-diagram.png)

**What is bandwidth?**

- Bandwidth is measured as the amount of data that can be transferred from one point to another within a network in a specific amount of time. Typically, bandwidth is expressed as a bitrate and measured in bits per second (bps).

![](https://www.lifewire.com/thmb/tcTghn6ir8ZIgUjOf8dm9aof3lg=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-is-bandwidth-26258091-957d0a321cbe4b09b05b4b211b7e7e6b.png)


**How do cloud providers compute service costs?**
-The three biggest cost centers related to a cloud environment include network, compute, and storage.

- Network: Cost per Rack Unit

  - Network hardware costs
  - Network infrastructure maintenance
  - Labor

- Compute: Cost per GB of Virtual RAM

  - Hardware operation
  - Hardware acquisition

- Storage: Cost per GB of Virtual Disk



# Document the following Vocabulary Terms

**Server Instances :** the partition of a computer that you used on the cloud.

**Containers :** A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

**Cloud Services :** the services that you can do on computers online not locally.
or Cloud services are infrastructure, platforms, or software that are hosted by third-party providers and made available to users through the internet.

**Cloud Architecture :** Cloud architecture is the way technology components combine to build a cloud, in which resources are pooled through virtualization technology and shared across a network.

**AWS :** Amazon web Services, it is a platform that provide a cloud computing services in general.

**EC2/Beanstalk vs Heroku :**

- both of them consider as a Paas, platform as a service.
- we use them to deploy our backend-server in general. but in EB we can deploy even fron-end but in Heroku we can't.
- autoscalling in EB, but manual scalling in Heroku.

![EC2/Beanstalk vs Heroku](https://cdn.hackernoon.com/hn-images/1*WlcxsHxXMK9qcQyKYNa6XQ.png)

# Preparation Materials

# AWS S3

- Amazon Simple Storage Service (Amazon S3) is storage for the Internet. It is designed to make web-scale computing easier.
![](https://support.cloudability.com/hc/article_attachments/360089211134/s3-storage-classes.png)


# AWS Lambda Basics

> AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you. You can use AWS Lambda to extend other AWS services with custom logic, or create your own back end services that operate at AWS scale, performance, and security

![]()

- AWS Lambda is a serverless computing service provided by Amazon Web Services (AWS).

- will write afunctions with supported runtimes and will be executed with amazon servers and with suitable instances.

- each function will be in a container, this containor will be connected with an instance to run the function.

- to complete a Serverless stack you’ll need:

  - a computing service.
  - a database service.
  - an HTTP gateway service.

- Lambda suited for :

  - individual tasks run for a short time
  - each task is generally self-contained
  - there is a large difference between the lowest and highest levels in the workload of the application.

  - Scalable APIs
  - Data processing
  - Task automation


![](https://www.simform.com/wp-content/uploads/2018/08/Serverless-Examples-with-AWS-Lambda-Use-Cases.png)


**- advantages of using Lambda :**

- Pay per use : just for the running time & network traffic.
- Fully managed infrastructure
- Automatic scaling : will use and connect many instances as your application needed.
- Tight integration with other AWS products : like DynamoDB, S3 and API Gateway

**- dissadvantages of using Lambda :**

- Cold start time : will take 5-10 sec to run if it was stopped.

- Function limits

  - Execution time/run time : maximum 15 mins running time.
  - Memory available to the function.
  - Code package size : max size of code zip file is 50 MB
  - Concurrency : max run 1000 function at the same time.
  - Payload size : max size is 10 MB.

- Not always cost-effective : depending on the time and the type of your application.

- Limited number of supported runtimes : doesn't support all languages.

# AWS Lambda Functions

- Benefits :

  - No servers to manage
  - Continuous scaling
  - Cost optimized with millisecond metering
  - Consistent performance at any scale

- Use cases :

  - Data processing
  - Real-time file processing
  - Real-time stream processing
  - Machine learning
  - Backends
  - Web applications
  - IoT backends
  - Mobile backends

# CDN

- A Content Delivery Network (CDN) is a geographically distributed group of servers that work together to provide fast delivery of Internet content.

- it is a group of servers that are each of them in defferent location.
- when user hit a request then the nearest server will response to him.

- CDN doesn’t only speed up the delivery of Internet content, it helps protect your website against certain forms of cyber attacks, such as Denial of Service attacks.

- CDN make the responses more fast.
- CDN used in large companies that have a web traffic without CDN.

![](https://scdn1.plesk.com/wp-content/uploads/2019/04/25141138/image11.jpg)

## External resources :

- [https://www.docker.com/resources/what-container](https://www.docker.com/resources/what-container)
- [https://www.paessler.com/it-explained/bandwidth](https://www.paessler.com/it-explained/bandwidth)
- [https://expedient.com/knowledgebase/blog/2015-05-01-how-the-cost-of-cloud-computing-is-calculated/](https://expedient.com/knowledgebase/blog/2015-05-01-how-the-cost-of-cloud-computing-is-calculated/)

* [stackoverflow](https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client?rq=1)

* [https://kumargaurav1247.medium.com/aws-sns-simple-notification-service-1972262b8564](https://kumargaurav1247.medium.com/aws-sns-simple-notification-service-1972262b8564)

* [AWS](https://aws.amazon.com/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc)

* [EC2 For Humans](https://www.youtube.com/watch?v=lZMkgOMYYIg)

* [Elastic Beanstalk](https://www.youtube.com/watch?v=SrwxAScdyT0