import React from "react";
import dynamic from 'next/dynamic'
import Head from "next/head";

const FooterHero = dynamic(() => import('../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  ssr: false,
})

export default function TermsAndConditions() {
  return (
    <div className="top-[10vh] h-[90vh] overflow-x-hidden fixed overflow-y-auto bg-white  terms_container">
      <Head rel="canonical">
        <title>
          Terms and Conditions | The Following terminology or definition applies
          to these Terms and Conditions.
        </title>
        <meta
          name="description"
          content="These Terms of Use constitute a legally binding agreement made between you, Whether personally or on behalf of an entity (“you”) and Property Bhavan private limited (“Company,” “we,” “us,” or “our”), concerning your access to and use of the http://www.propertybhavan.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).We are registered in India and have our registered office at 88,chetla road Kolkata 700053, Kolkata, West Bengal 700053."
        />
        <link rel="canonical" href="/TermsAndConditions" />
      </Head>
      <div className="p-3 mvsm:p-8">
        <h2 className="mx-auto text-purple w-fit font-bold py-7 text-2xl mvsm:text-4xl">
          Terms and Conditions
        </h2>
        <div>
          <p className="font-medium">
            The Following terminology or definition applies to these Terms and
            Conditions. ” The Company ” and “Our Company” means a company
            incorporated and registered under the Companies Act,2013. <br />
            <br />
            “User”, “End User” and “You” refers to you or your authorized
            representative during the use of our website “propertybhavan.com”
            and / or before / during / after availing our services. <br />
            <br />
            “We”, “Our” and “Us” refers our Company “Property Bhavan Private
            Limited”. <br />
            <br />
            “Site”-means the website owned, managed and operated by Property
            Bhavan Private Limited. The url of the website is
            www.propertybhavan.com. <br />
            <br />
            Broker-Means any person, who negotiates or acts on behalf of one
            Real Estate (Regulation and Development) Act, 2016 (RERA) 11 person
            in a transaction of transfer of his plot, apartment or building, as
            the case may be, in a real estate project, by way of sale, with
            another person or transfer of plot, apartment or building, as the
            case may be, of any other person to him and receives remuneration or
            fees or any other charges for his services whether as commission or
            otherwise and includes a person who introduces, through any medium,
            prospective buyers and sellers to each other for negotiation for
            sale or purchase of plot, apartment or building, as defined in Real
            Estate (Regulation and Development) Act, 2016. <br />
            <br />
            “Assured Plans” – means a combination of various services bundled
            together and Priced at a Specific Amount solely Decided by Property
            Bhavan Privated Limited. <br />
            <br />
            “Assured Tag “- means that after an user purchased our assured plan
            ( “Owner Plan”, ”Pg Owner Plan”, ”Landlord Plan”, ”Builder Plan”),
            we verify the property owner and not the property. <br />
            <br />
            “Property Services” – means various property Services Provided by
            Property Bhavan Privated limited to Purchase, Sell &amp; Rent
            Immovable Property. <br />
            <br />
            “Immovable Property”- refers to Real estate such as house, factory,
            manufacturing plant, warehouse, land, hereditary allowances, etc
            with a value greater than Rs 100 as defined in Indian Registration
            Act,1908 Section2(6). <br />
            <br />
            “Trojan Horse”- refers A type of malware that downloads onto a
            computer disguised as a legitimate program. A Trojan horse is
            so-called due to its delivery method, which typically sees an
            attacker use social engineering to hide malicious code within
            legitimate software. <br />
            <br />
            “Virus”- refers to types of malicious code or program written to
            alter the way a computer operates and is designed to spread from one
            computer to another. A virus operates by inserting or attaching
            itself to a legitimate program or document that supports macros in
            order to execute its code. <br />
            <br />
            This Terms of Use is an electronic record in terms of the
            Information Technology Act, 2000 (as amended/re-enacted) and rules
            thereunder, and is published in accordance with the provisions of
            Rule 3 (1) of the Information Technology (Intermediaries Guidelines
            and Digital Media Ethics code) Rules, 2021, which mandates
            publishing of rules and regulations, privacy policy and terms of use
            for access or usage of our services. This electronic record is
            generated by a computer system and does not require any physical or
            digital signature. <br />
            <br />
            Even though our Privacy Policy, Refund Policy and these Terms are
            mutually exclusive to one another, but for the sake of removal of
            any repugnancy, they may be construed harmoniously with each other.{" "}
            <br />
            <br />
          </p>
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            AGREEMENT TO TERMS
          </h3>
          <p className="font-medium">
            These Terms of Use constitute a legally binding agreement made
            between you, Whether personally or on behalf of an entity (“you”)
            and Property Bhavan private limited (“Company,” “we,” “us,” or
            “our”), concerning your access to and use of the
            http://www.propertybhavan.com website as well as any other media
            form, media channel, mobile website or mobile application related,
            linked, or otherwise connected thereto (collectively, the “Site”).
            We are registered in India and have our registered office at
            88,chetla road Kolkata 700053, Kolkata, West Bengal 700053. You
            agree that by accessing the Site, you have read, understood, and
            agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE
            WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED
            FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p className="font-medium mt-2">
            Supplemental terms and conditions or documents that may be posted on
            the Site from time to time are hereby expressly incorporated herein
            by reference. We reserve the right, in our sole discretion, to make
            changes or modifications to these Terms of Use at any time and for
            any reason. We will alert you about any changes by updating the
            “Last updated” date of these Terms of Use, and you waive any right
            to receive specific notice of each such change. Please ensure that
            you check the applicable Terms every time you use our Site so that
            you understand which Terms apply. You will be subject to, and will
            be deemed to have been made aware of and to have accepted, the
            changes in any revised Terms of Use by your continued use of the
            Site after the date such revised Terms of Use are posted.
          </p>
          <p className="font-medium mt-2">
            The information provided on the Site is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Site from other locations do so on
            their own initiative and are solely responsible for compliance with
            local laws, if and to the extent local laws are applicable.
          </p>
          <p className="font-medium mt-2">
            All users who are minors in the jurisdiction in which they reside
            (generally under the age of 18) must have the permission of, and be
            directly supervised by, their parent or guardian to use the Site. If
            you are a minor, you must have your parent or guardian read and
            agree to these Terms of Use prior to you using the Site.
          </p>
          <p className="font-medium mt-2">
            The use of this website is solely governed by these Terms, our
            Privacy Policy and our Refund Policy that may be uploaded on the
            website with further modifications and/or amendments made thereto by
            us from time to time, at our sole discretion and without giving you
            any notice.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            INTELLECTUAL PROPERTY RIGHTS
          </h3>
          <p className="font-medium mt-2">
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs,and graphics on the Site
            (collectively, the “Content”) and the trademarks, service marks, and
            logos contained therein (the “Marks”) are owned or controlled by us
            or licensed to us, and are protected by copyright and trademark laws
            and various other intellectual property rights and of the
            Competition Act,2002 and Patents Act of 1970. The Content and the
            Marks are provided on the Site “AS IS” for your information and
            personal use only. Except as expressly provided in these Terms of
            Use, no part of the Site and no Custom Branding Content or Marks may
            be copied, reproduced, aggregated, republished, uploaded,posted,
            publicly displayed, encoded, translated, transmitted, distributed,
            sold, licensed, or otherwise exploited for any commercial purpose
            whatsoever, without our express prior written permission.
          </p>
          <p className="font-medium mt-2">
            Provided that you are eligible to use the Site, you are granted a
            limited license to access and use the Site and to download or print
            a copy of any portion of the Content to which you have properly
            gained access solely for your personal, non-commercial use. We
            reserve all rights not expressly granted to you in and to the Site,
            the Content and the Marks.Provided that you are eligible to use the
            Site, you are granted a limited license to access and use the Site
            and to download or print a copy of any portion of the Content to
            which you have properly gained access solely for your personal,
            non-commercial use. We reserve all rights not expressly granted to
            you in and to the Site, the Content and the Marks.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            USER REPRESENTATIONS
          </h3>
          <p className="font-medium mt-2">
            By using the Site, you represent and warrant that: (1) all
            registration information you submit will be true, accurate, current,
            and complete; (2) you will maintain the accuracy of such information
            and promptly update such registration information as necessary; (3)
            you have the legal capacity and you agree to comply with these Terms
            of Use; (4) you are not a minor in the jurisdiction in which you
            reside, or if a minor, you have received parental permission to use
            the Site; (5) you will not access the Site through automated or
            non-human means, whether through a bot, script, or otherwise; (6)
            you will not use the Site for any illegal or unauthorized purpose;
            and (7) your use of the Site will not violate any applicable law or
            regulation.
          </p>
          <p className="font-medium mt-2">
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Site (or any portion thereof).On termination of your account, the
            “Subscription” opted for shall stand forfeited thereof.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            USER REGISTRATION
          </h3>
          <p className="font-medium mt-2">
            You may be required to register with the Site. You agree to keep
            your password confidential and will be responsible for all use of
            your account and password. We reserve the right to remove, reclaim,
            or change a username you select if we determine, in our sole
            discretion, that such username is inappropriate, obscene, or
            otherwise objectionable.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            PROHIBITED ACTIVITIES
          </h3>

          <p className="font-medium mt-2">
            You may not access or use the Site for any purpose other than that
            for which we make the Site available. The Site may not be used in
            connection with any commercial endeavours except those that are
            specifically endorsed or approved by us.
          </p>
          <p className="font-medium mt-2">
            As a user of the Site, you agree not to:
          </p>
          <p className="font-medium mt-2">
            1. Systematically retrieve data or other content from the Site to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </p>
          <p className="font-medium mt-2">
            2. Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </p>
          <p className="font-medium mt-2">
            3. Circumvent, disable, or otherwise interfere with security-related
            features of the Site, including features that prevent or restrict
            the use or copying of any Content or enforce limitations on the use
            of the Site and/or the Content contained therein.
          </p>
          <p className="font-medium mt-2">
            4. Disparage, tarnish, or otherwise harm, in our opinion, us and/or
            the Site.
          </p>
          <p className="font-medium mt-2">
            5. Use any information obtained from the Site in order to harass,
            abuse, or harm another person.
          </p>
          <p className="font-medium mt-2">
            6. Make improper use of our support services or submit false reports
            of abuse or misconduct.
          </p>
          <p className="font-medium mt-2">
            7. Use the Site in a manner inconsistent with any applicable laws or
            regulations.
          </p>
          <p className="font-medium mt-2">
            8. Engage in unauthorized framing of or linking to the Site.
          </p>
          <p className="font-medium mt-2">
            9. Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party’s uninterrupted use and enjoyment of the
            Site or modifies, impairs, disrupts, alters, or interferes with the
            use, features, functions, operation, or maintenance of the Site.
          </p>
          <p className="font-medium mt-2">
            10. Engage in any automated use of the system, such as using scripts
            to send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </p>
          <p className="font-medium mt-2">
            11. Attempt to impersonate another user or person or use the
            username of another user.
          </p>
          <p className="font-medium mt-2">
            12. Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or
            other similar devices (sometimes referred to as “spyware” or
            “passive collection mechanisms” or “pcms”).
          </p>
          <p className="font-medium mt-2">
            13. Interfere with, disrupt, or create an undue burden on the Site
            or the networks or services connected to the Site.
          </p>
          <p className="font-medium mt-2">
            14. Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Site to you.
          </p>
          <p className="font-medium mt-2">
            15. Attempt to bypass any measures of the Site designed to prevent
            or restrict access to the Site, or any portion of the Site.
          </p>
          <p className="font-medium mt-2">
            16. Copy or adapt the Site’s software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </p>
          <p className="font-medium mt-2">
            17. Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Site.
          </p>
          <p className="font-medium mt-2">
            18. Except as may be the result of standard search engine or
            Internet browser usage, use, launch, develop, or distribute any
            automated system, including without limitation, any spider, robot,
            cheat utility, scraper, or offline reader that accesses the Site, or
            using or launching any unauthorized script or other software.
          </p>
          <p className="font-medium mt-2">
            19. Use a buying agent or purchasing agent to make purchases on the
            Site.
          </p>
          <p className="font-medium mt-2">
            20. Make any unauthorized use of the Site, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses.
          </p>
          <p className="font-medium mt-2">
            21. Use the Site as part of any effort to compete with us or
            otherwise use the Site and/or the Content for any revenue-generating
            endeavor or commercial enterprise.
          </p>
          <p className="font-medium mt-2">
            22. Sell or otherwise transfer your profile.
          </p>
          <p className="font-medium mt-2">
            23. In the event, a User is detected as a “Broker”, We “the Company”
            has the right to reject or disable such account without any notice
            to you. On termination of your account, the “Subscription” opted for
            shall stand forfeited thereof as mentioned in the refund policy.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            USER GENERATED CONTRIBUTIONS
          </h3>
          <p className="font-medium mt-2">
            The Site provides you with the opportunity to create, submit, post,
            display, transmit, perform, publish, distribute, or broadcast
            content and materials to us or on the Site, including but not
            limited to text, writings, video, audio, photographs, graphics,
            comments, suggestions, or personal information or other material
            (collectively, “Contributions”). Contributions may be viewable by
            other users of the Site and through third-party websites. As such,
            any Contributions you transmit may be treated as non-confidential
            and non-proprietary.
          </p>
          <p className="font-medium mt-2">
            When you create or make available any Contributions, you thereby
            represent and warrant that:
          </p>
          <p className="font-medium mt-2">
            1. The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </p>
          <p className="font-medium mt-2">
            2. You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to authorize
            us, the Site, and other users of the Site to use your Contributions
            in any manner contemplated by the Site and these Terms of Use.
          </p>
          <p className="font-medium mt-2">
            3. You have the written consent, release, and/or permission of each
            and every identifiable individual person in your Contributions to
            use the name or likeness of each and every such identifiable
            individual person to enable inclusion and use of your Contributions
            in any manner contemplated by the Site and these Terms of Use.
          </p>
          <p className="font-medium mt-2">
            4. Your Contributions are not false, inaccurate, or misleading.
          </p>
          <p className="font-medium mt-2">
            5. Your Contributions are not unsolicited or unauthorized
            advertising, promotional materials, pyramid schemes, chain letters,
            spam, mass mailings, or other forms of solicitation.
          </p>
          <p className="font-medium mt-2">
            6. Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </p>
          <p className="font-medium mt-2">
            7. Your Contributions do not ridicule, mock, disparage, intimidate,
            or abuse anyone.
          </p>
          <p className="font-medium mt-2">
            8. Your Contributions are not used to harass or threaten (in the
            legal sense of those terms) any other person and to promote violence
            against a specific person or class of people.
          </p>
          <p className="font-medium mt-2">
            9. Your Contributions do not violate any applicable law, regulation,
            or rule.
          </p>
          <p className="font-medium mt-2">
            10. Your Contributions do not violate the privacy or publicity
            rights of any third party.
          </p>
          <p className="font-medium mt-2">
            11. Your Contributions do not violate any applicable law concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors.
          </p>
          <p className="font-medium mt-2">
            12. Your Contributions do not include any offensive comments that
            are connected to race, national origin, gender, sexual preference,
            or physical handicap.
          </p>
          <p className="font-medium mt-2">
            13. Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Terms of Use, or any
            applicable law or regulation.
          </p>
          <p className="font-medium mt-2">
            Any use of the Site in violation of the foregoing violates these
            Terms of Use and may result in, among other things, termination or
            suspension of your rights to use the Site.
          </p>
          <p className="font-medium mt-2">
            14. Information generated by any user from a property posted in our
            website is not accountable to us. So if an user gets any information
            we are not held accountable.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            USER GENERATED CONTRIBUTIONS
          </h3>
          <p className="font-medium mt-2">
            By posting your Contributions to any part of the Site or making
            Contributions accessible to the Site by linking your account from
            the Site to any of your social networking accounts, you
            automatically grant, and you represent and warrant that you have the
            right to grant, to us an unrestricted, unlimited, irrevocable,
            non-exclusive, transferable, royalty-free, fully-paid, worldwide
            right, and license to host, use, copy, reproduce, disclose, sell,
            resell, publish, broadcast, retitle, archive, store, cache, publicly
            perform, publicly display, reformat, translate, transmit, excerpt
            (in whole or in part), and distribute such Contributions (including,
            without limitation, your image and voice) for any purpose,
            commercial, advertising, or otherwise, and to prepare derivative
            works of, or incorporate into other works, such Contributions, and
            grant and authorize sublicenses of the foregoing. The use and
            distribution may occur in any media formats and through any media
            channels.
          </p>
          <p className="font-medium mt-2">
            This license will apply to any form, media, or technology now known
            or hereafter developed, and includes our use of your name, company
            name, and franchise name as applicable, and any of the trademarks,
            service marks, trade names, logos, and personal and commercial
            images you provide. You waive all moral rights in your
            Contributions, and you warrant that moral rights have not otherwise
            been asserted in your Contributions.
          </p>
          <p className="font-medium mt-2">
            We do not assert any ownership over your Contributions. You retain
            full ownership of all of your Contributions and any intellectual
            property rights or other proprietary rights associated with your
            Contributions. We are not liable for any statements or
            representations in your Contributions provided by you in any area on
            the Site. You are solely responsible for your Contributions to the
            Site and you expressly agree to exonerate us from any and all
            responsibility and to refrain from any legal action against us
            regarding your Contributions.
          </p>
          <p className="font-medium mt-2">
            We have the right, in our sole and absolute discretion, (1) to edit,
            redact, or otherwise change any Contributions; (2) to re-categorize
            any Contributions to place them in more appropriate locations on the
            Site; and (3) to pre-screen or delete any Contributions at any time
            and for any reason, without notice. We have no obligation to monitor
            your Contributions.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            SUBMISSIONS
          </h3>
          <p className="font-medium mt-2">
            You acknowledge and agree that any questions, comments, suggestions,
            ideas,feedback, or other information regarding the Site
            (“Submissions”) provided by you to us are non-confidential and shall
            become our sole property. We shall own exclusive rights, including
            all intellectual property rights, and shall be entitled to the
            unrestricted use and dissemination of these Submissions for any
            lawful purpose, commercial or otherwise, without acknowledgment or
            compensation to you. You hereby waive all moral rights to any such
            Submissions, and you hereby warrant that any such Submissions are
            original with you or that you have the right to submit such
            Submissions. You agree there shall be no recourse against us for any
            alleged or actual infringement or misappropriation of any
            proprietary right in your Submissions.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            SITE MANAGEMENT
          </h3>
          <p className="font-medium mt-2">
            We reserve the right, but not the obligation, to: (1) monitor the
            Site for violations of these Terms of Use; (2) take appropriate
            legal action against anyone who, in our sole discretion, violates
            the law or these Terms of Use, including without limitation,
            reporting such user to law enforcement authorities; (3) in our sole
            discretion and without limitation, refuse, restrict access to, limit
            the availability of, or disable (to the extent technologically
            feasible) any of your Contributions or any portion thereof; (4) in
            our sole discretion and without limitation, notice, or liability, to
            remove from the Site or otherwise disable all files and content that
            are excessive in size or are in any way burdensome to our systems;
            and (5) otherwise manage the Site in a manner designed to protect
            our rights and property and to facilitate the proper functioning of
            the Site.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            Refund Policy
          </h3>
          <p className="font-medium mt-2">
            We usually follow a strict no-refund policy. However, we do have
            certain exceptions. If you have any queries contact us at
            Help@propertybhavan.com
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            COPYRIGHT INFRINGEMENTS
          </h3>
          <p className="font-medium mt-2">
            We respect the intellectual property rights of others. If you
            believe that any material available on or through the Site infringes
            upon any copyright you own or control,please immediately notify us
            at hello@propertybhavan.com we will take necessary steps against
            that user after the report is verified. Any user using the website
            can’t make a website of its own with a similar pattern to our
            website for 2 years.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            TERM AND TERMINATION
          </h3>
          <p className="font-medium mt-2">
            These terms of use shall remain in full force and effect while you
            use the site. without limiting any other provision of these terms of
            use, we reserve the right to, in our sole discretion and without
            notice or liability, deny access to and use of the site (including
            blocking certain ip addresses), to any person for any reason or for
            no reason, including without limitation for breach of any
            representation, warranty, or covenant contained in these terms of
            use or of any applicable law or regulation. We may terminate your
            use or participation in the site or delete your account and any
            content or information that you posted at any time, without warning,
            in our sole discretion. If we terminate or suspend your account for
            any reason, you are prohibited from registering and creating a new
            account under your name, a fake or borrowed name, or the name of any
            third party, even if you may be acting on behalf of the third party.
            In addition to terminating or suspending your account, we reserve
            the right to take appropriate legal action, including without
            limitation pursuing civil, criminal, and injunctive redress.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            MODIFICATIONS AND INTERRUPTIONS
          </h3>
          <p className="font-medium mt-2">
            We reserve the right to change, modify, or remove the contents of
            the Site at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Site. We also reserve the right to modify or
            discontinue all or part of the Site without notice at any time. We
            will not be liable to you or any third party for any modification,
            price change, suspension, or discontinuance of the Site. We cannot
            guarantee the Site will be available at all times. We may experience
            hardware, software, or other problems or need to perform maintenance
            related to the Site, resulting in interruptions, delays, or errors.
            We reserve the right to change, revise, update, suspend,
            discontinue, or otherwise modify the Site at any time or for any
            reason without notice to you. You agree that we have no liability
            whatsoever for any loss, damage, or inconvenience caused by your
            inability to access or use the Site during any downtime or
            discontinuance of the Site. Nothing in these Terms of Use will be
            construed to obligate us to maintain and support the Site or to
            supply any corrections, updates, or releases in connection
            therewith.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            GOVERNING LAW
          </h3>
          <p className="font-medium mt-2">
            These Terms shall be governed by and defined following the laws of
            India. Property Bhavan private limited and yourself irrevocably
            consent that the courts of India shall have exclusive jurisdiction
            to resolve any dispute which may arise in connection with these
            terms.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            DISPUTE RESOLUTION
          </h3>
          <p className="font-bold mt-2">Amicable settlement</p>
          <p className="font-medium mt-2">
            To expedite resolution and control the cost of any dispute,
            controversy, or claim related to these Terms of Use (each “Dispute”
            and collectively, the “Disputes”) brought by either you or us
            (individually, a “Party” and collectively, the “Parties”), the
            Parties agree to first attempt to negotiate any Dispute (except
            those Disputes expressly provided below) informally for at least
            ninety (90) days before initiating arbitration. Such informal
            negotiations commence upon written notice from one Party to the
            other Party.
          </p>
          <p className="font-bold mt-2">Arbitration</p>
          <p className="font-medium mt-2">
            Any dispute arising out of or in connection with this contract,
            including any question regarding its existence, validity, or
            termination, shall be referred to and finally resolved by the
            according to the Rules which, as a result of referring to it, is
            considered as the part of this clause. The number of arbitrators
            shall be one (1). The seat, or venue, of arbitration shall be in
            Kolkata, India. The language of the proceedings shall be English.
            The governing law of the contract shall be the substantive law of
            India.
          </p>
          <p className="font-bold mt-2">Restrictions</p>
          <p className="font-medium mt-2">
            The Parties agree that any arbitration shall be limited to the
            Dispute between the Parties individually. To the full extent
            permitted by law, (a) no arbitration shall be joined with any other
            proceeding; (b) there is no right or authority for any Dispute to be
            arbitrated on a class-action basis or to utilize class action
            procedures; and (c) there is no right or authority for any Dispute
            to be brought in a purported representative capacity on behalf of
            the general public or any other persons.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            CORRECTIONS
          </h3>

          <p className="font-medium mt-2">
            There may be information on the Site that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Site at any time, without prior
            notice.
          </p>
          <br />
        </div>

        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            DISCLAIMER
          </h3>

          <p className="font-medium mt-2">
            The site is provided on an as-is and as-available basis. you agree
            that your use of the site and our services will be at your sole
            risk. to the fullest extent permitted by law, we disclaim all
            warranties, express or implied, in connection with the site and your
            use thereof, including, without limitation, the implied warranties
            of merchantability, fitness for a particular purpose, and
            non-infringement. we make no warranties or representations about the
            accuracy or completeness of the site’s content or the content of any
            websites linked to the site and we will assume no liability or
            responsibility for any (1) errors, mistakes, or inaccuracies of
            content and materials, (2) personal injury or property damage, of
            any nature whatsoever, resulting from your access to and use of the
            site, (3) any unauthorized access to or use of our secure servers
            and/or any and all personal information and/or financial information
            stored therein, (4) any interruption or cessation of transmission to
            or from the site, (5) any bugs, viruses, trojan horses, or the like
            which may be transmitted to or through the site by any third party,
            and/or (6) any errors or omissions in any content and materials or
            for any loss or damage of any kind incurred as a result of the use
            of any content posted, transmitted, or otherwise made available via
            the site. we do not warrant, endorse, guarantee, or assume
            responsibility for any product or service advertised or offered by a
            third party through the site, any hyperlinked website, or any
            website or mobile application featured in any banner or other
            advertising, and we will not be a party to or in any way be
            responsible for monitoring any transaction between you and any
            third-party providers of products or services. as with the purchase
            of a product or service through any medium or in any environment,
            you should use your best judgment and exercise caution where
            appropriate.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            LIMITATIONS OF LIABILITY
          </h3>

          <p className="font-medium mt-2">
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials found or offered on
            this platform for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to
            the fullest extent permitted by law. Your use of any information or
            materials on this platform is entirely at your own risk, for which
            we shall not be liable. It shall be your own responsibility to
            ensure that any property or information available through this
            platform meet your specific requirements. This platform contains
            material that is owned by or licensed to us. These materials include
            but are not limited to, the design, layout, look- appearance and
            graphics. All reproduction is prohibited other than in accordance
            with intellectual property rights which forms part of these terms
            and conditions.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            INDEMNIFICATION
          </h3>

          <p className="font-medium mt-2">
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys’ fees
            and expenses, made by any third party due to or arising out of: (1)
            your Contributions; (2) use of the Site; (3) breach of these Terms
            of Use; (4) any breach of your representations and warranties set
            forth in these Terms of Use; (5) your violation of the rights of a
            third party, including but not limited to intellectual property
            rights; or (6) any overt harmful act toward any other user of the
            Site with whom you connected via the Site. Notwithstanding the
            foregoing, we reserve the right, at your expense, to assume the
            exclusive defense and control of any matter for which you are
            required to indemnify us, and you agree to cooperate, at your
            expense, with our defense of such claims. We will use reasonable
            efforts to notify you of any such claim, action, or proceeding which
            is subject to this indemnification upon becoming aware of it.Our
            website may not be compatible with all devices.Property Bhavan
            Private Limited shall not be obligated to provide workable website
            for any phones/tablets unless stated otherwise.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">USER DATA</h3>

          <p className="font-medium mt-2">
            We will maintain certain data that you transmit to the Site for the
            purpose of managing the performance of the Site, as well as data
            relating to your use of the Site. Although we perform regular
            routine backups of data, you are solely responsible for all data
            that you transmit or that relates to any activity you have
            undertaken using the Site. You agree that we shall have no liability
            to you for any loss or corruption of any such data, and you hereby
            waive any right of action against us arising from any such loss or
            corruption of such data.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATUR
          </h3>

          <p className="font-medium mt-2">
            Visiting the Site, sending us emails, and completing online forms
            constitute electronic communications. You consent to receive
            electronic communications, and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Site, satisfy any legal
            requirement that such communication be in writing. YOU HEREBY AGREE
            TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
            RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
            RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
            SITE. You hereby waive any rights or requirements under any
            statutes, regulations, rules, ordinances, or other laws in any
            jurisdiction which require an original signature or delivery or
            retention of non-electronic records, or to payments or the granting
            of credits by any means other than electronic means.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            MISCELLANEOUS
          </h3>

          <p className="font-medium mt-2">
            These Terms of Use and any policies or operating rules posted by us
            on the Site or in respect to the Site constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Terms of Use
            shall not operate as a waiver of such right or provision. These
            Terms of Use operate to the fullest extent permissible by law. We
            may assign any or all of our rights and obligations to others at any
            time. We shall not be responsible or liable for any loss, damage,
            delay, or failure to act caused by any cause beyond our reasonable
            control.
          </p>
          <p className="font-medium mt-2">
            If any provision or part of a provision of these Terms of Use is
            determined to be unlawful, void, or unenforceable, that provision or
            part of the provision is deemed severable from these Terms of Use
            and does not affect the validity and enforceability of any remaining
            provisions. There is no joint venture, partnership, employment or
            agency relationship created between you and us as a result of these
            Terms of Use or use of the Site. You agree that these Terms of Use
            will not be construed against us by virtue of having drafted them.
            You hereby waive any and all defenses you may have based on the
            electronic form of these Terms of Use and the lack of signing by the
            parties hereto to execute these Terms of Use.
          </p>
          <br />
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            MISCELLANEOUS
          </h3>
          <p className="font-medium mt-2">
            11, Haridas Dawn Road kolkata – 700053
          </p>
          <p className="font-medium mt-2">Phone: 9051942738</p>
          <p className="font-medium mt-2">propertybhavan@gmail.com</p>
        </div>
      </div>
      <FooterHero />
      <Footer />
    </div>
  );
}
