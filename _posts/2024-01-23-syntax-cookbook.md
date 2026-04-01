---
layout: default
title: Syntax cookbook
css: syntax
published: false
categories:
    - linguistics
---

Here's a "cookbook" of various kinds of English syntax trees. This is my attempt at capturing a happy medium of what's commonly introduced in introductory texts and my own undergrad syntax class.

Perhaps the most controversial assumption is that morphology is a product of syntax. Not taking sides here - all I'm saying is this is what I was first taught.

# Terminology

<dl>
    <dt>Headedness principle</dt>
    <dd>A phrase needs a head; an XP needs an X.</dd>
    <dt>Binarity principle</dt>
    <dd>Everything has two children (which may be empty or host a combination of multiple things due to movement).</dd>
    <dt>Projection</dt>
    <dd>The presence of an X necessitates the presence of X' and XP above it.</dd>
    <dt><a name="vish">VISH</a> (Verb-Internal Subject Hypothesis)</dt>
    <dd>The hypothesis that subjects of verbs generate in SpecVP and raise to SpecTP.</dd>
    <dt><a name="hmc">Head-Movement Constraint</a></dt>
    <dd>Heads can only move to adjacent heads.</dd>
</dl>

# X-bar structure

![X-bar structure](/images/trees/xp.png)

You can have as many nested X' levels as you want, but some people like to have no adjuncts and only have the one X' level. The specifier position of XP is abbreviated SpecXP.

# "Classic" DP

*the cow*

![Tree for a DP](/images/trees/dp.png)

# Possessed DP

*the dog's cow*

![Tree for a possessed DP](/images/trees/possessed.png)

The "subject" generates in the specifier of a lexical phrase before raising to the specifier of a functional phrase, much like SpecVP raising to SpecTP per [VISH](#vish).

# SVO sentence

*Cows eat grass.*

![Tree for an SVO sentence](/images/trees/svo.png)

The subject generates in SpecVP and raises to SpecTP as per [VISH](#vish). T lowers to V since [present] is not pronounceable on its own; √eat+[present] resolves at a later stage to "eat".

# Adverbs

There are two common ways of doing adverbs. One approach is to make the adverb phrase an adjunct of the verb phrase:

*Cows eat grass quickly.*

![Tree for a sentence with an adverb with the adverb as an adjunct of the VP](/images/trees/adverbs-1.png)

The other approach is to make the entire verb phrase move from the argument of the adverb phrase to its specifier position:

*Cows eat grass quickly.*

![Tree for a sentence with the VP moving from the argument to specifier position of the adverb phrase](/images/trees/adverbs-2.png)

# Modal

*Cows can eat grass.*

![Tree for a sentence with a modal](/images/trees/modal.png)

Things that can occupy T are features [past] [present] and modals.

# Question with a modal

*Can cows eat grass?*

![Tree for a question with a modal](/images/trees/question-modal.png)

Questions generate with a phonologically null [question] C that need to combine with something to be pronounced; here, the T raises to C.

# Question with do-support

*Do cows eat grass?*

![Tree for a question with do-support](/images/trees/question-do-support.png)

As in the question with a modal, T raises to C, but as the [question] C and [present] T are both unpronounced, the repair strategy is to resolve the combination to "do".

# Negation with do-support

*Cows do not eat grass.*

![Tree for a question with negation and do-support](/images/trees/negation.png)

T-to-V movement, like in the "classic" SVO sentence, is blocked due to the [Head-Movement Constraint](#hmc). The repair strategy is to resolve the unpronounceable [present] to "do".

# Aspect be/have

*Cows are eating grass.*

![Tree for a sentence with aspectual be](/images/trees/aspect-be.png)

As opposed to the "normal" [T-to-V movement](#svo-sentence), this sentence has V-to-T movement. V-to-T movement occurs with the verb *be* and the auxiliary (but not the lexical verb) *have*.

# Question with aspect be/have

*Are cows eating grass?*

![Tree for a question with aspectual be](/images/trees/aspect-question-be.png)

# Negation with aspect be/have

*Cows are not eating grass.*

![Tree for a sentence with negation and aspectual be](/images/trees/negation-aspect-be.png)

The V-to-T movement here is a violation of the [Head-Movement Constraint](#hmc).

*Last updated May 20, 2024*
